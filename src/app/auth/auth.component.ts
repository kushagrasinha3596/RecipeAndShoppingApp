import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert-component/alert.component';
import { AlertComponentHelperDirective } from '../shared/alertcomponent-helper.directive.ts/alertcomponent-helper.directive';
import { componentFactoryName } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy{

    signuploader: boolean;
    isLoginMode: boolean;
    error: string = null;
    subs: Subscription;

    @ViewChild(AlertComponentHelperDirective, {static: false}) hostElement: AlertComponentHelperDirective;
    
    ngOnInit(){
        this.error = null;
    }

    constructor(private authService: AuthService,
                private router: Router,
                private componentFactoryResolver: ComponentFactoryResolver){
        this.signuploader = false;
    }

    switchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm){
        if(!form.valid){
            return;
        }
        let email = form.value.email;
        let password = form.value.password;
        this.signuploader = true;
        if(this.isLoginMode){
            this.authService.login(email, password)
            .subscribe((res)=>{
                console.log(res);
                this.signuploader = false;
                this.router.navigate(['/recipes']);
            },(error)=>{
                this.error = "Error in logging user";
                this.showAlertComponent(this.error);
                this.signuploader = false;
            });
        }else{
            this.authService.signUp(email, password)
            .subscribe((res)=>{
                console.log(res);
                this.signuploader = false;
                this.router.navigate(['/recipes']);
            }, (error)=>{
                this.error = "Error in creating new user";
                this.showAlertComponent(this.error);
                this.signuploader = false;
            });
        }
        form.reset();
    }

    onClickingClose(){
        this.error = null;
    }

    showAlertComponent(message: string){

        //getting a Component Factory Resolver
        let componentFactoryResolver = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        let hostElementViewContainerRef = this.hostElement.viewContainerRef;
        hostElementViewContainerRef.clear();
        let compRef = hostElementViewContainerRef.createComponent(componentFactoryResolver);
        compRef.instance.message = message;
        this.subs = compRef.instance.closeEvent.subscribe(()=>{
            this.subs.unsubscribe();
            hostElementViewContainerRef.clear();
        });
    }

    ngOnDestroy(){
        if(this.subs){
            this.subs.unsubscribe();
        }
    }
}
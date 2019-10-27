import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{

    signuploader: boolean;
    isLoginMode: boolean;
    error: string = null;

    ngOnInit(){
        this.error = null;
    }

    constructor(private authService: AuthService,
                private router: Router){
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
                this.signuploader = false;
            });
        }
        form.reset();
    }
}
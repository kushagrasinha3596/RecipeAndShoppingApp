import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{

    signuploader: boolean;
    isLoginMode: boolean;

    constructor(private authService: AuthService){
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
            //
        }else{
            this.authService.signUp(email, password)
            .subscribe((res)=>{
                console.log(res);
                this.signuploader = false;
            }, (error)=>{
                console.log("Error in registering user");
                this.signuploader = false;
            });
        }
        form.reset();
    }
}
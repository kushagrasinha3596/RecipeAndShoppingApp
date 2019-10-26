import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponse{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable()
export class AuthService{

    constructor(private http: HttpClient){}

    signUp(email: string, password: string){
        return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDM232QEExYSWZ6nVCoFED3jGfLYklpqg0",{
        email: email,
        password: password,
        returnSecureToken: true
        });
    }
}
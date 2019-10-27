import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { tap } from 'rxjs/operators';

export interface AuthResponse{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable()
export class AuthService{

    constructor(private http: HttpClient){}

    user = new BehaviorSubject<User>(null);

    signUp(email: string, password: string){
        return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDM232QEExYSWZ6nVCoFED3jGfLYklpqg0",{
        email: email,
        password: password,
        returnSecureToken: true
        })
        .pipe(
            tap((userData)=>{
            const expirationDate = new Date(new Date().getTime() + +userData.expiresIn * 1000);
            let user = new User(userData.email, userData.localId, userData.idToken, expirationDate);
            this.user.next(user);
          }
        )
      );
    }

    login(email: string, password: string){
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDM232QEExYSWZ6nVCoFED3jGfLYklpqg0',{
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(
            tap((userData)=>{
            const expirationDate = new Date(new Date().getTime() + +userData.expiresIn * 1000);
            let user = new User(userData.email, userData.localId, userData.idToken, expirationDate);
            this.user.next(user);
          }
        )
     )
    }
}
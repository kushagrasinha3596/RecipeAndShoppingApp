import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

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

  tokenExpirationTimer: any;
    constructor(private http: HttpClient,
        private router: Router){}

    user = new BehaviorSubject<User>(null);

    logout(){
      this.user.next(null);
      this.router.navigate(['/auth']);
      localStorage.removeItem('userData');
      if(this.tokenExpirationTimer){
        clearTimeout(this.tokenExpirationTimer);
      }
      this.tokenExpirationTimer = null;
    }

    autoLogout(expirationTime: number){
      this.tokenExpirationTimer = setTimeout(()=>{
        this.user.next(null);
        if(localStorage.getItem('userData')){
          localStorage.removeItem('userData');
        }
      },expirationTime);
    }

    autoLogin(){
      let localUserData: 
      {
        email: string,
        id: string,
        _token: string,
        _tokenExpirationDate: string
      } = JSON.parse(localStorage.getItem('userData'));

      if(!localUserData){
        return;
      }

      let loadedUser = new User(localUserData.email, localUserData.id, localUserData._token, new Date(localUserData._tokenExpirationDate));
      if(loadedUser.token){
        this.user.next(loadedUser);
        let leftExpirationDuration = (+localUserData._tokenExpirationDate)*1000 - new Date().getTime();
        this.autoLogout(leftExpirationDuration);
      }else{
        this.user.next(null);
      }
    }

    signUp(email: string, password: string){
      return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + environment.fireBaseAPIKey,{
      email: email,
      password: password,
      returnSecureToken: true
      })
      .pipe(
          tap((userData)=>{
          const expirationDate = new Date(new Date().getTime() + +userData.expiresIn * 1000);
          let user = new User(userData.email, userData.localId, userData.idToken, expirationDate);
          this.user.next(user);
          this.autoLogout(+userData.expiresIn * 1000);
          localStorage.setItem('userData', JSON.stringify(user));
        }
      )
    );
  }

    login(email: string, password: string){
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.fireBaseAPIKey,{
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(
            tap((userData)=>{
            const expirationDate = new Date(new Date().getTime() + +userData.expiresIn * 1000);
            let user = new User(userData.email, userData.localId, userData.idToken, expirationDate);
            this.user.next(user);
            this.autoLogout(+userData.expiresIn * 1000);
            localStorage.setItem('userData', JSON.stringify(user));
          }
        )
     )
    }
}
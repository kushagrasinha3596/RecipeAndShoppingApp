import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, take} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService,
        private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{
        debugger
          let res = this.authService.user.pipe(
            map(userData =>{
                if(!!userData){
                    return true;
                }else{
                    this.router.navigate(['./auth']);
                }
        }));
        return res;
    }
}
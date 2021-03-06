import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginUserService} from './login-user.service';

@Injectable()
export class AutoguardGuard implements CanActivate {
 constructor(private user: LoginUserService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.router.navigate(['/']);
    return this.user.getUserLoggedIn();
  }
}

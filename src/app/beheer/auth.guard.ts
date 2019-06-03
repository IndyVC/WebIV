import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import * as JWT from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._authService.loggedIn() && this.isAdmin()) {
      return true;
    }
    this._authService.redirectUrl = state.url
    this._router.navigate(['/home']);
    return false;
  }

  isAdmin(){
      var token = localStorage.getItem('token');
      var data = JWT(token);
      return (
        data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ==
        'Admin'
      );
  }
}

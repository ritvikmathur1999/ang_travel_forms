import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginPageComponent } from 'src/app/auth/login-page/login-page.component';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanDeactivate<LoginPageComponent> {
  constructor(private route:Router,private auth:AuthService){}
  canDeactivate(
    component: LoginPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.userCreds.value.username==''){
    return window.confirm("Please enter values to proceed");
      }
    return true
  }
  
}

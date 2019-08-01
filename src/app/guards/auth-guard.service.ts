import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public route: Router) { }

  canActivate() {
    if(sessionStorage.getItem('user')){
      return true;
    }
    else{
      this.route.navigate(['']);
      return false;
    }
    
  }
}
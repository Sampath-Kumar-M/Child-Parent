import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  requestedUrl : string = '';
  constructor(private route: Router) { }

  login(){
    sessionStorage.setItem('isLoggedIn', 'true');
    if(this.requestedUrl != ''){
      this.route.navigate([this.requestedUrl]);
    }
  }

  IsAuthenticated() : boolean {
    return !!sessionStorage.getItem('isLoggedIn');
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, 
    private route: Router) {

  }
  title = 'child-parent';

  logout() {
    sessionStorage.removeItem('isLoggedIn');
    this.route.navigate(["/home"]);
  }

}

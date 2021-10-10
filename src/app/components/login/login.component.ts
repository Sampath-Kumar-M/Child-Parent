import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup({})
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required]),
      passowrd: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    this.authService.login();
  }

}

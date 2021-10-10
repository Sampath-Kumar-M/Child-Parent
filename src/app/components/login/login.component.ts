import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { createPasswordStrengthValidator } from 'src/app/validators/password-strength.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup({})
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, createPasswordStrengthValidator()])
    })
  }

  get email() {
    return this.loginform.controls['email'];
  }

  get password() {
    return this.loginform.controls['password'];
  }

  onSubmit() {
    if (this.loginform.valid)
      this.authService.login();
  }

}

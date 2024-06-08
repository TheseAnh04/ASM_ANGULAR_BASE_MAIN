import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  router = new Router();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onLogin() {
    this.authService.Login(this.loginForm.value as IUser).subscribe(
      (data) => {
        alert('Đăng nhập thành công');

        localStorage.setItem('accessToken', data?.accessToken);

        this.router.navigate(['/admin/categories']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

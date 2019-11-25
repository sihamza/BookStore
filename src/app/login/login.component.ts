import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = false ;
  email: string;
  password: string;

  constructor(public authService: AuthService , private router: Router ) {}


    async login() {
      this.error = !(await this.authService.login(this.email, this.password));
      if ( !this.error )
      this.router.navigate(['dashboard']);

    }

    logout() {
      this.authService.logout();
    }




}

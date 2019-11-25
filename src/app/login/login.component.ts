import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = false ;
  email: string;
  password: string;

  constructor(public authService: AuthService) {}


    async login() {
      this.error = !(await this.authService.login(this.email, this.password));
    }

    logout() {
      this.authService.logout();
    }




}

<<<<<<< HEAD
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
=======
import { Component , OnInit } from '@angular/core';

>>>>>>> bc32ba125b1f8433eeb72947f30eaffb5169f16a

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
<<<<<<< HEAD
  loged : boolean = false ;

  email: string;
  password: string;

  constructor(public authService: AuthService) {}
  
  logout() {
    this.authService.logout();   
  }

=======

  constructor() {}


>>>>>>> bc32ba125b1f8433eeb72947f30eaffb5169f16a
}

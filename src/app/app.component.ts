import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
  loged : boolean = false ;

  email: string;
  password: string;

  constructor(public authService: AuthService) {}
  
  logout() {
    this.authService.logout();   
  }

}

import { Component , OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
  loged : boolean = false ;

  constructor(public authService: AuthService) {}

  async ngOnInit() {
    this.loged = await this.authService.isloged() ;
  }

  logout() {
    this.authService.logout();
  }



}

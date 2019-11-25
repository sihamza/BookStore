import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { GbooksService } from "../gbooks.service" ;
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username : String = 'Chocofoxy' ;
  loged = true ;
  date : Date = new Date() ;
  stored_books = [] ;

  constructor(public dialog: MatDialog , private books : GbooksService , private authService: AuthService , private router: Router  ) { }

  async ngOnInit() {
    this.stored_books = await this.books.getBooks('harry potter') ;
    this.loged = await this.authService.isloged() ;
  }

  openDialog() {
    this.dialog.open(AjouterComponent, { panelClass: 'custom-dialog-container' }); }

  async logout() {
      await this.authService.logout();
      this.router.navigate(['login']);
    }

}

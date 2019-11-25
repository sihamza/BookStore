import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { GbooksService } from "../gbooks.service" ;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username : String = 'Chocofoxy' ;
  date : Date = new Date() ;
  stored_books : array = [] ;

  constructor(public dialog: MatDialog , private books : GbooksService ) { }

  async ngOnInit() {
    this.stored_books = await this.books.getBooks('harry potter') ;
  }

  openDialog() {
    this.dialog.open(AjouterComponent, { panelClass: 'custom-dialog-container' }); }


}

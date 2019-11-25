import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username : String = 'Chocofoxy' ;
  date : Date = new Date() ;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(AjouterComponent, { panelClass: 'custom-dialog-container' }); }

}

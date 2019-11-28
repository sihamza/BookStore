import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
//import { GbooksService } from "../gbooks.service" ;
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BookService } from '../Book.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username : String = 'Chocofoxy' ;
  loged = true ;
  date : Date = new Date() ;
  books = [] ;
  search ;

  constructor(public dialog: MatDialog , private authService: AuthService , private router: Router, private bookService: BookService  ) { }

  async ngOnInit() {
    //this.stored_books = await this.books.getBooks('harry potter') ;
    this.loged = await this.authService.isloged() ;
    this.getBooksList();
  }

  openDialog() {
    this.dialog.open(AjouterComponent, { panelClass: 'custom-dialog-container' }); }

  async logout() {
      await this.authService.logout();
      this.router.navigate(['login']);
    }

  getBooksList() {
     this.bookService.getBooksList().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(Books => {
        this.Books = Books;
        console.log(this.books) ;
      });
    }

    deleteBooks() {
      this.BookService.deleteAll();
    }


}

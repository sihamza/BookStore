import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
//import { GBooksService } from "../gBooks.service" ;
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
  filteredBooks ;
  date : Date = new Date() ;
  Books:any[] ;
  search ;

  constructor(public dialog: MatDialog , private authService: AuthService , private router: Router, private BookService: BookService  ) { }

  async ngOnInit() {
    //this.Books = await this.Books.getBooks('harry potter') ;
    this.loged = await this.authService.isloged() ;
    this.getBooksList();
  }

  openDialog() {
    this.dialog.open(AjouterComponent, { panelClass: 'custom-dialog-container' , height: '90%' }); }

  async logout() {
      await this.authService.logout();
      this.router.navigate(['login']);
    }

    getBooksList() {
      this.BookService.getBooksList().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(Books => {
        this.Books = Books;
        this.filteredBooks = this.Books ;
      });
    }

    deleteBooks() {
      this.BookService.deleteAll();
    }

    getSearch() {
      this.filteredBooks = (this.search || this.search != null) ? this.Books.filter(  ( book ) => {
         return book.title.toUpperCase().indexOf(this.search.toUpperCase()) != -1 ;
      }) : this.Books  ;

    }


}

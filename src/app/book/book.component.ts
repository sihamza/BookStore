import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute  } from '@angular/router';
import { BookService } from '../Book.service';
import { Router } from '@angular/router';
import { ModifyComponent } from '../modify/modify.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book ;

  constructor(public dialog: MatDialog , private authService: AuthService , private router : Router , private active_router: ActivatedRoute  , private bookService: BookService ) { }

    async ngOnInit() {
    this.book = await this.bookService.getBook(this.active_router.snapshot.params.key) ;
    if ( !this.book ) {
      this.router.navigate(['dashboard']);
    }
  }

  openDialog() {
    this.dialog.open(ModifyComponent, { panelClass: 'custom-dialog-container' , height: '90%'  , data : {
    book : this.book , key : this.active_router.snapshot.params.key
  } }); }

  async deleteBook() {
    await this.bookService.deleteBook(this.active_router.snapshot.params.key) ;
    this.router.navigate(['dashboard']);
  }

}

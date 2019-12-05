import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute  } from '@angular/router';
import { BookService } from '../Book.service';
import { Router } from '@angular/router';
import { ModifyComponent } from '../modify/modify.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book ;

  constructor(public dialog: MatDialog , private _snackBar: MatSnackBar , private authService: AuthService , private router : Router , private active_router: ActivatedRoute  , private bookService: BookService ) { }

    async ngOnInit() {
    this.book = await this.bookService.getBook(this.active_router.snapshot.params.key) ;
    if ( !this.book ) {
      this.router.navigate(['dashboard']);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModifyComponent, { panelClass: 'custom-dialog-container' , height: '90%'  , data : {
    book : this.book , key : this.active_router.snapshot.params.key
      }
    });
     dialogRef.afterClosed().subscribe( async result => {
      this.openSnackBar(' Book updated !', 'close')
      this.book = await this.bookService.getBook(this.active_router.snapshot.params.key) ;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  placeholder( img ) {
    img.src = "https://sylvie-corbelin.com/wp-content/uploads/2015/02/import_placeholder.png" ;
    img.width = 200 ;
  }

  async deleteBook() {
    await this.bookService.deleteBook(this.active_router.snapshot.params.key) ;
    this.router.navigate(['dashboard']);
  }

}

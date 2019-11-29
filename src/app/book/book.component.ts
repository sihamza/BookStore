import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute  } from '@angular/router';
import { BookService } from '../Book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book ;

  constructor(private authService: AuthService , private router: ActivatedRoute  , private bookService: BookService ) { }

  async ngOnInit() {
    //this.book =  await this.bookService.getBook(this.router.snapshot.params.id) ;
  }

  async deleteBook() {
    await this.bookService.deleteBook(this.router.snapshot.params.id) ;
  }

}

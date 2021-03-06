import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Book } from '../Book';
import { BookService } from '../Book.service';


@Component({
  selector: 'app-testadd',
  templateUrl: './testadd.component.html',
  styleUrls: ['./testadd.component.css']
})
export class TestaddComponent implements OnInit {

  Book: Book = new Book();
  submitted = false;

  constructor(private BookService: BookService) { }

  ngOnInit() {
  }


getBookbykey(key: string){
  /*  this.BookService.getBook(key).subscribe( book => {
      console.log(book);

    });*/
 }
  newBook(): void {
    this.submitted = false;
    this.Book = new Book();
  }

  save() {
    this.BookService.createBook(this.Book);
    this.Book = new Book();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}

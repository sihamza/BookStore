import { Component, OnInit } from '@angular/core';
import { GbooksService } from "../gbooks.service" ;
import { Book } from '../Book';
import { BookService } from '../Book.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  Book: Book = new Book();

  api : boolean = true ;
  search : string = "harry" ;
  suggestions = [] ;
  //custom_book = { }

  constructor(private books : GbooksService,private BookService: BookService ) { }

  ngOnInit() {
    //this.suggestions = await this.books.getBooks(this.search) ;
  }

  async getSuggestions(search,author) {
     this.suggestions = await this.books.getBooks(search,author) ;
  }

  addGoogleBook(f2) {
    this.BookService.createBookFromApi(f2.value['gbook'],f2.value['qty'],f2.value['price']) ;
  }

  newBook(): void {
    this.Book = new Book();
  }

  save() {
    this.BookService.createBook(this.Book);
    this.Book = new Book();
  }

  onSubmit() {
    this.save();
  }


}

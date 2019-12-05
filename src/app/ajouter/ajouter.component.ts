import { Component, OnInit } from '@angular/core';
import { GbooksService } from "../gbooks.service" ;
import { Book } from '../Book';
import { BookService } from '../Book.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  Book: Book = new Book();

  api : boolean = true ;

  suggestions = [] ;

  search:string;


  BookForm:FormGroup=new FormGroup({
    title:new FormControl('',Validators.required),
    subtitle:new FormControl('',Validators.required),
    poster:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    publishedDate:new FormControl('',Validators.required),
    publisher:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    amount:new FormControl('',Validators.required),
    });


  constructor(private books : GbooksService,private BookService: BookService ) { }

  ngOnInit() {

  }



  async getSuggestions(search,author) {
    this.suggestions = await this.books.getBooks(search,author) ;
 }


  addGoogleBook(f2) {
   this.BookService.BookFromAPI(f2.value['gbook'],f2.value['qty'],f2.value['price']) ;
   this.BookService.InsertBook();
  }

  newBook(): void {
    this.Book = new Book();
  }

  onSubmit() {
    this.BookService.cBook.title = this.BookForm.value['title'];
    this.BookService.cBook.subtitle = this.BookForm.value['subtitle'];
    this.BookService.cBook.poster = this.BookForm.value['poster'];
    this.BookService.cBook.description = this.BookForm.value['description'];
    this.BookService.cBook.publishedDate = this.BookForm.value['publishedDate'];
    this.BookService.cBook.publisher = this.BookForm.value['publisher'];
    this.BookService.cBook.price = this.BookForm.value['price'];
    this.BookService.cBook.amount = this.BookForm.value['amount'];

    this.BookService.InsertBook();
  }


  onReset() {
    this.BookForm.reset();
    console.log("Reset !");
}


}

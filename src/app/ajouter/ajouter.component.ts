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
    author:new FormControl('',Validators.required),
    poster:new FormControl('',Validators.required),
    pageCount:new FormControl('',Validators.required),
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
   this.Book = this.BookService.BookFromAPI(f2.value['gbook'],f2.value['qty'],f2.value['price']);
   this.BookService.InsertBook(this.Book);
  }

  

  save() {
    this.Book.title = this.BookForm.value['title'];
    this.Book.subtitle = this.BookForm.value['subtitle'];
    this.Book.poster = this.BookForm.value['poster'];
    this.Book.author = this.BookForm.value['author'];
    this.Book.pageCount = this.BookForm.value['pageCount'];
    this.Book.description = this.BookForm.value['description'];
    this.Book.publishedDate = this.BookForm.value['publishedDate'];
    this.Book.publisher = this.BookForm.value['publisher'];
    this.Book.price = this.BookForm.value['price'];
    this.Book.amount = this.BookForm.value['amount'];


    this.BookService.InsertBook(this.Book);
    

    this.BookService.createBook(this.Book);
    this.Book = new Book();

  }

  onSubmit() {
    console.log("submit done !");
    this.save();
  }

  onReset() {
    this.BookForm.reset();
    console.log("Reset !");
}


}

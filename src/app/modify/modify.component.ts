import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BookService } from '../Book.service';
import { Book } from '../Book';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {


    BookForm:FormGroup ;



  constructor( @Inject(MAT_DIALOG_DATA) public data : any , private BookService: BookService ) {
   }

  ngOnInit() {
    this.BookForm = new FormGroup({
      title:new FormControl({ value : this.data.book.title + '' , disabled: true },Validators.required),
      subtitle:new FormControl( this.data.book.subtitle + '',Validators.required),
      author:new FormControl('',Validators.required),
      poster:new FormControl(this.data.book.poster + '',Validators.required),
      pageCount:new FormControl(this.data.book.pageCount + '',Validators.required),
      description:new FormControl(this.data.book.description + '',Validators.required),
      publishedDate:new FormControl(this.data.book.publishedDate + '',Validators.required),
      publisher:new FormControl(this.data.book.publisher+ '',Validators.required),
      price:new FormControl(this.data.book.price + '',Validators.required),
      amount:new FormControl(this.data.book.amount + '',Validators.required),
      });
      console.log( this.BookForm ) ;
  }

  update() {
    this.BookService.updateBook( this.data.key , this.BookForm.value as Book ) ;
  }

}

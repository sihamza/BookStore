import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import { BookService } from '../Book.service';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { Inject } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {


    BookForm:FormGroup ;



  constructor(  public dialogRef: MatDialogRef<ModifyComponent> , @Inject(MAT_DIALOG_DATA) public data : any , private router: Router , private BookService: BookService ) {
   }

  ngOnInit() {
    this.BookForm = new FormGroup({
      title:new FormControl({ value : this.data.book.title + '' , disabled: true },Validators.required),
      subtitle:new FormControl( this.data.book.subtitle + '' ,Validators.required),
      author:new FormControl(this.data.book.author ,Validators.required),
      poster:new FormControl(this.data.book.poster + '' ,Validators.required),
      pageCount:new FormControl(this.data.book.pageCount + '' ,Validators.required),
      description:new FormControl(this.data.book.description + '' ,Validators.required),
      publishedDate:new FormControl(new Date(this.data.book.publishedDate) ,Validators.required),
      publisher:new FormControl(this.data.book.publisher + '' ,Validators.required),
      price:new FormControl(this.data.book.price + '' ,Validators.required),
      amount:new FormControl(this.data.book.amount + '' ,Validators.required),
      });
  }

  update() {
    this.BookForm.value['publishedDate'] = moment(this.BookForm.value['publishedDate']).format('YYYY-MM-DD') ;
    this.BookService.updateBook( this.data.key , this.BookForm.value as Book ) ;
    this.dialogRef.close();
  }

}

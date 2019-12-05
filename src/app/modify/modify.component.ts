import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {


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



  constructor( @Inject(MAT_DIALOG_DATA) public book : any ) {
   }

  ngOnInit() {
    console.log(this.book);
  }

}

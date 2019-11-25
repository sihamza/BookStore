import { Component, OnInit } from '@angular/core';
import { GbooksService } from "../gbooks.service" ;
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  api : boolean = true ;
  search : string = "harry" ;
  suggestions = [] ;
  //custom_book = { }

  constructor(private books : GbooksService ) { }

  ngOnInit() {
    //this.suggestions = await this.books.getBooks(this.search) ;
  }

  async getSuggestions(search) {
     this.suggestions = await this.books.getBooks(search) ;
  }


}

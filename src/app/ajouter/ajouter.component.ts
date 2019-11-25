import { Component, OnInit } from '@angular/core';
import { GbooksService } from "../gbooks.service" ;
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  api : boolean = true ;

  constructor(private books : GbooksService ) { }

  ngOnInit() {
    this.books.getBooks("Harry") ;
  }

}

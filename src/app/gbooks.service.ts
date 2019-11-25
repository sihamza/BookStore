import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GbooksService {

  async getBooks(query:string) {
    var books = await fetch(`./api?q=${query}`).then(( response ) => response.json()) ;
    console.log(books) ;
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Book } from './Book';
import { map,take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dbPath = '/Books';

  BooksRef: AngularFirestoreCollection<Book>;


  constructor(private db: AngularFirestore) {
    this.BooksRef = db.collection(this.dbPath);
  }




 getBook(key: string) {
 return this.db.collection("Books").doc(key).ref.get().then( doc => {
    return doc.data() ;
 });

  }


  BookFromAPI(gbook:any , qty:number , price:string):void{
 
    var book:Book = new Book();

    book.title=gbook.volumeInfo.title;
     if(gbook.volumeInfo.subtitle == null){book.subtitle="none";}else{book.subtitle=gbook.volumeInfo.subtitle;}
     if(gbook.volumeInfo.authors == null){}else{book.authors=gbook.volumeInfo.authors;}
     if(gbook.volumeInfo.publisher == null){book.publisher="none";}else{book.publisher=gbook.volumeInfo.publisher;}
     if(gbook.volumeInfo.description == null){book.description="none";}else{book.description=gbook.volumeInfo.description;}
     if(gbook.volumeInfo.publishedDate == null){book.publishedDate="none";}else{book.publishedDate=gbook.volumeInfo.publishedDate;}
     if(gbook.volumeInfo.imageLinks.thumbnail == null){book.poster="https://www.forewordreviews.com/books/covers/mountains-of-the-world.jpg";}else{book.poster=gbook.volumeInfo.imageLinks.thumbnail;}
     if(gbook.volumeInfo.pageCount == null){book.pageCount=0;}else{book.pageCount=gbook.volumeInfo.pageCount;}
     if(gbook.volumeInfo.averageRating == null){book.pageCount=0;}else{book.averageRating=gbook.volumeInfo.averageRating;}
     book.price=price;
     book.amount=qty;
     return book;
  }





  InsertBook(abook:any){

    this.db.collection(this.dbPath , ref => ref.where('title', '==', abook.title))
    .snapshotChanges().pipe(
     map(changes =>
       changes.map(c =>
       { return { key: c.payload.doc.id,  book : c.payload.doc.data() };
       })
     )
   )
   .subscribe(Books => {

     if(Books.length == 0){

     this.createBook(abook);


     }


   });

 }


  createBook(Book: Book): void {
    this.BooksRef.add({...Book});
  }


   updateBook(key: string, value: Book) {
     this.BooksRef.doc(key).update(value);
  }

  deleteBook(key: string) {
    return this.BooksRef.doc(key).delete();
  }

  getBooksList(): AngularFirestoreCollection<Book> {
    return this.BooksRef;
  }

  deleteAll() {
    this.BooksRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}

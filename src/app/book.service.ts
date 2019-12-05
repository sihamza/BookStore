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


  cbook:Book = new Book();

  constructor(private db: AngularFirestore) {
    this.BooksRef = db.collection(this.dbPath);
  }


   existesBook(gbook:any){
    this.db.collection(this.dbPath , ref => ref.where('title', '==', gbook.volumeInfo.title))
    .snapshotChanges().pipe(
     map(changes =>
       changes.map(c =>
       { return { key: c.payload.doc.id,  book : c.payload.doc.data() };
       })
     )
   )
   .subscribe(Books => {
     if(Books.length == 0){ console.log("not exist");}
     else{ console.log(" exist");  var x = Books[0].amount++; updateAmount(Book[0].key,x); }
    });
  }

 getBook(key: string) {
 return this.db.collection("Books").doc(key).ref.get().then( doc => {
    return doc.data() ;
 });

  }

  updateAmount(id: string,x: number) {
    console.log('User `${id}` amount updated')
    this.BooksRef.doc(`${id}`).update({ amount: x });
  }

  BookFromAPI(gbook:any , qty:number , price:string):void{
    var  book = new Book() ;
    book.title=gbook.volumeInfo.title;
     if(gbook.volumeInfo.subtitle == null){this.cbook.subtitle="none";}else{this.cbook.subtitle=gbook.volumeInfo.subtitle;}
     if(gbook.volumeInfo.authors == null){}else{this.cbook.authors=gbook.volumeInfo.authors;}
     if(gbook.volumeInfo.publisher == null){this.cbook.publisher="none";}else{this.cbook.publisher=gbook.volumeInfo.publisher;}
     if(gbook.volumeInfo.description == null){this.cbook.description="none";}else{this.cbook.description=gbook.volumeInfo.description;}
     if(gbook.volumeInfo.publishedDate == null){this.cbook.publishedDate="none";}else{this.cbook.publishedDate=gbook.volumeInfo.publishedDate;}
     if(gbook.volumeInfo.imageLinks.thumbnail == null){this.cbook.poster="https://www.forewordreviews.com/books/covers/mountains-of-the-world.jpg";}else{book.poster=gbook.volumeInfo.imageLinks.thumbnail;}
     if(gbook.volumeInfo.pageCount == null){this.cbook.pageCount=0;}else{this.cbook.pageCount=gbook.volumeInfo.pageCount;}
     if(gbook.volumeInfo.averageRating == null){this.cbook.pageCount=0;}else{this.cbook.averageRating=gbook.volumeInfo.averageRating;}
     this.cbook.price=price;
     this.cbook.amount=qty;
  }

 



  InsertBook(){

    this.db.collection(this.dbPath , ref => ref.where('title', '==', this.cBook.title))
    .snapshotChanges().pipe(
     map(changes =>
       changes.map(c =>
       { return { key: c.payload.doc.id,  book : c.payload.doc.data() };
       })
     )
   )
   .subscribe(Books => {

     if(Books.length == 0){

     console.log(this.cBook);
     this.createBook(this.cBook);


     }
     else{ console.log(" exist");  var x= Number(Books[0].amount + this.cBook.qty); this.updateAmount('69pbaAR1l7TFppsFgzUK',x); }

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

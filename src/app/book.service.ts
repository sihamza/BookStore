import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Book } from './Book';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  private dbPath = '/Books';
 
  BooksRef: AngularFirestoreCollection<Book> = null;
 
  constructor(private db: AngularFirestore) {
    this.BooksRef = db.collection(this.dbPath);
  }

  createBookFromApi(gbook:any , qty:number , price:string){
    
    this.db.collection(this.dbPath , ref => ref.where('title', '==', gbook.volumeInfo.title))
    .snapshotChanges().pipe(
     map(changes =>
       changes.map(c =>
         ({ key: c.payload.doc.id,  book : c.payload.doc.data() })
       )
     )
   )
   .subscribe(Books => {
     console.log(Books);
     if(Books.length == 0){
       var  book = new Book() ;
     book.title=gbook.volumeInfo.title;
     book.subtitle=gbook.volumeInfo.subtitle;
     book.authors=gbook.volumeInfo.authors;
     book.publisher=gbook.volumeInfo.publisher;
     book.publishedDate=gbook.volumeInfo.publishedDate;
     book.poster= "ok"; //gbook.volumeInfo.imageLinks.thumbnail;
     book.pageCount=gbook.volumeInfo.pageCount;
     book.averageRating=gbook.volumeInfo.averageRating;
     book.price=price;
     book.amount=qty;
     console.log(book);
     this.createBook(book);
     }
     else{
       var x:any ;
       x = Books[0].book ;
       x.amount += qty ;
       this.updateBook(Books[0].key ,  x ) ;  
       
     }
 
     
   })
     
 }
  
 
  createBook(Book: Book): void {
    this.BooksRef.add({...Book});
  }
 
  async updateBook(key: string, value: any): Promise<void> {
    await this.BooksRef.doc(key).update(value);
  }
 
  deleteBook(key: string): Promise<void> {
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

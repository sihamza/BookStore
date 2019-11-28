import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Book } from './Book';
 
@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  private dbPath = '/Books';
 
  BooksRef: AngularFirestoreCollection<Book> = null;
 
  constructor(private db: AngularFirestore) {
    this.BooksRef = db.collection(this.dbPath);
  }
 
  createBook(Book: Book): void {
    this.BooksRef.add({...Book});
  }
 
  updateBook(key: string, value: any): Promise<void> {
    return this.BooksRef.doc(key).update(value);
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

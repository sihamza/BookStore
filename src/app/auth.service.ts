import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }

   signup(email: string, password: string){
     this.firebaseAuth
     .auth
     .createUserWithEmailAndPassword(email, password)
     .then(value => {
       console.log('Success!',value);
     })
     .catch(err => {
       console.log('Something went wrong:',err.message);
     });
   }

   login(email: string, password: string){
     return this.firebaseAuth
     .auth
     .signInWithEmailAndPassword(email, password)
     .then( () => { console.log('Success!');
       return true ;
     })
     .catch(err => {
      console.log(err) ;
      return false ;
     });
   }

   logout(){
     this.firebaseAuth
     .auth
     .signOut();
   }

   isloged() {
     return this.firebaseAuth.auth.currentUser ? true : false ;
   }



}

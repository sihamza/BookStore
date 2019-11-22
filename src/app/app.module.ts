import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';


const firebaseConfig = {
    apiKey: "AIzaSyATa75BfV-7u837wkRc835uB8zFmvcc3_M",
    authDomain: "durable-woods-247720.firebaseapp.com",
    databaseURL: "https://durable-woods-247720.firebaseio.com",
    projectId: "durable-woods-247720",
    storageBucket: "durable-woods-247720.appspot.com",
    messagingSenderId: "637835463526",
    appId: "1:637835463526:web:dbcaca87994c39e54c56a7"
  };


@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  ErrorComponent],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule ,
    AngularFireAuthModule ,
    FormsModule ,
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

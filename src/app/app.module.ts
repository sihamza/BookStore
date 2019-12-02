import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AuthGuard } from './core/auth.guard';
import { BookComponent } from './book/book.component';
import { TestaddComponent } from './testadd/testadd.component';
import { ModifyComponent } from './modify/modify.component';





@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  ErrorComponent,
  DashboardComponent,
  AjouterComponent,
  BookComponent,
  TestaddComponent,
  ModifyComponent],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AuthService,AuthGuard,{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  ErrorComponent],
  imports: [
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

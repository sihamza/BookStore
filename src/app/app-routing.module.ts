import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component' ;
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { BookComponent } from './book/book.component';
import { AuthGuard } from './core/auth.guard';

import { TestaddComponent } from './testadd/testadd.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] } ,
  { path: 'book/:key', component: BookComponent, canActivate: [AuthGuard] } ,
  { path: 'ajouter', component: AjouterComponent, canActivate: [AuthGuard] } ,
  { path: 'testadd', component: TestaddComponent, canActivate: [AuthGuard] } ,
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

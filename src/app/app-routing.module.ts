import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component' ;
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { BookComponent } from './book/book.component';
import { AuthGuard } from './core/auth.guard';
import { ModifyComponent } from './modify/modify.component';

import { TestaddComponent } from './testadd/testadd.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] } ,
  { path: 'book/:key', component: BookComponent, canActivate: [AuthGuard] } ,
  { path: 'ajouter', component: AjouterComponent , canActivate: [AuthGuard] } ,
  { path: 'modify', component: ModifyComponent , canActivate: [AuthGuard] } ,
  { path: 'testadd', component: TestaddComponent, canActivate: [AuthGuard] } ,
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        onSameUrlNavigation: 'reload'
  })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

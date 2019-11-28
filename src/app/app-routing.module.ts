import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component' ;
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { BookComponent } from './book/book.component';
import { AuthGuard } from './core/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] } ,
  { path: 'ajouter', component: ErrorComponent, canActivate: [AuthGuard] } ,
  { path: 'book/:id', component: BookComponent, canActivate: [AuthGuard] } ,
  { path: 'ajouter', component: AjouterComponent, canActivate: [AuthGuard] } ,
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

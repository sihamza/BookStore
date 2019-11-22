import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component' ;
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: 'dashboard', component: DashboardComponent } ,
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

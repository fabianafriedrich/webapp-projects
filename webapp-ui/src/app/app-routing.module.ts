import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

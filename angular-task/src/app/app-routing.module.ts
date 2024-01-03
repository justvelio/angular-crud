import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingUsersComponent } from './adding-users/adding-users.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{
  path: '', component: HomePageComponent
},
{
  path: 'add', component: AddingUsersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

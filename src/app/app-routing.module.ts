import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavesListComponent } from './naves-list/naves-list.component';
import { NavesDetailComponent } from './naves-detail/naves-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:NavesListComponent},
  {path:'naves-detail/:id', component:NavesDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

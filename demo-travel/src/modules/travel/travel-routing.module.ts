import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageActiveComponent } from './page-active/page-active.component';
import { PageMyComponent } from './page-my/page-my.component';
const routes: Routes = [
  {path:"home", component:PageHomeComponent},
  {path:"active", component:PageActiveComponent},
  {path:"my", component:PageMyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }

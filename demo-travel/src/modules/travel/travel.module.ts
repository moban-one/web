import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageActiveComponent } from './page-active/page-active.component';
import { PageMyComponent } from './page-my/page-my.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    PageActiveComponent,
    PageMyComponent
  ],
  imports: [
    CommonModule,
    TravelRoutingModule
  ]
})
export class TravelModule { }

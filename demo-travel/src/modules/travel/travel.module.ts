import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageActiveComponent } from './page-active/page-active.component';
import { PageMyComponent } from './page-my/page-my.component';
import { CompTagNavbarComponent } from './comp-tag-navbar/comp-tag-navbar.component';
import { CompStarRatingComponent } from './comp-star-rating/comp-star-rating.component';
import { PageActiveDetailComponent } from './page-active-detail/page-active-detail.component';
import { TokPipe } from './tok.pipe';


@NgModule({
  declarations: [
    PageHomeComponent,
    PageActiveComponent,
    PageMyComponent,
    CompTagNavbarComponent,
    CompStarRatingComponent,
    PageActiveDetailComponent,
    TokPipe
  ],
  imports: [
    CommonModule,
    TravelRoutingModule,
  ]
})
export class TravelModule { }

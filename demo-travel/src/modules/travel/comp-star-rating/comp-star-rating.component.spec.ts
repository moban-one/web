import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompStarRatingComponent } from './comp-star-rating.component';

describe('CompStarRatingComponent', () => {
  let component: CompStarRatingComponent;
  let fixture: ComponentFixture<CompStarRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompStarRatingComponent]
    });
    fixture = TestBed.createComponent(CompStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

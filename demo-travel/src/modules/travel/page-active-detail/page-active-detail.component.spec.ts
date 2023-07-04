import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActiveDetailComponent } from './page-active-detail.component';

describe('PageActiveDetailComponent', () => {
  let component: PageActiveDetailComponent;
  let fixture: ComponentFixture<PageActiveDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageActiveDetailComponent]
    });
    fixture = TestBed.createComponent(PageActiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

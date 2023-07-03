import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActiveComponent } from './page-active.component';

describe('PageActiveComponent', () => {
  let component: PageActiveComponent;
  let fixture: ComponentFixture<PageActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageActiveComponent]
    });
    fixture = TestBed.createComponent(PageActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

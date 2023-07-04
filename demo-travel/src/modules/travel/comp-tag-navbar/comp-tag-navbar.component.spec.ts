import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTagNavbarComponent } from './comp-tag-navbar.component';

describe('CompTagNavbarComponent', () => {
  let component: CompTagNavbarComponent;
  let fixture: ComponentFixture<CompTagNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompTagNavbarComponent]
    });
    fixture = TestBed.createComponent(CompTagNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

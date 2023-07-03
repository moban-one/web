import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyComponent } from './page-my.component';

describe('PageMyComponent', () => {
  let component: PageMyComponent;
  let fixture: ComponentFixture<PageMyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMyComponent]
    });
    fixture = TestBed.createComponent(PageMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

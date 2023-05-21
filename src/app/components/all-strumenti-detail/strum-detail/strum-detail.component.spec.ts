import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrumDetailComponent } from './strum-detail.component';

describe('StrumDetailComponent', () => {
  let component: StrumDetailComponent;
  let fixture: ComponentFixture<StrumDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrumDetailComponent]
    });
    fixture = TestBed.createComponent(StrumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

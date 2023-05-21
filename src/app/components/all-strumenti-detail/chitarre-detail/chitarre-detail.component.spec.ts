import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitarreDetailComponent } from './chitarre-detail.component';

describe('ChitarreDetailComponent', () => {
  let component: ChitarreDetailComponent;
  let fixture: ComponentFixture<ChitarreDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChitarreDetailComponent]
    });
    fixture = TestBed.createComponent(ChitarreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

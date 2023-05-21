import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianofortiDetailComponent } from './pianoforti-detail.component';

describe('PianofortiDetailComponent', () => {
  let component: PianofortiDetailComponent;
  let fixture: ComponentFixture<PianofortiDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PianofortiDetailComponent]
    });
    fixture = TestBed.createComponent(PianofortiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

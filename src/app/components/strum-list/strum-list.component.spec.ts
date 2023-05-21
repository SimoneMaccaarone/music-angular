import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrumListComponent } from './strum-list.component';

describe('StrumListComponent', () => {
  let component: StrumListComponent;
  let fixture: ComponentFixture<StrumListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrumListComponent]
    });
    fixture = TestBed.createComponent(StrumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

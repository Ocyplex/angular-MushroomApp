import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsCardComponent } from './rooms-card.component';

describe('RoomsCardComponent', () => {
  let component: RoomsCardComponent;
  let fixture: ComponentFixture<RoomsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsCardComponent]
    });
    fixture = TestBed.createComponent(RoomsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

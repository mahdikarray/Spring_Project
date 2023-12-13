import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsStatusComponent } from './reservations-status.component';

describe('ReservationsStatusComponent', () => {
  let component: ReservationsStatusComponent;
  let fixture: ComponentFixture<ReservationsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

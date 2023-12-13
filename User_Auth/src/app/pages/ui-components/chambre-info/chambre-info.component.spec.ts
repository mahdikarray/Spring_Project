import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreInfoComponent } from './chambre-info.component';

describe('ChambreInfoComponent', () => {
  let component: ChambreInfoComponent;
  let fixture: ComponentFixture<ChambreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

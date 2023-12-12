import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerCardComponent } from './foyer-card.component';

describe('FoyerCardComponent', () => {
  let component: FoyerCardComponent;
  let fixture: ComponentFixture<FoyerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

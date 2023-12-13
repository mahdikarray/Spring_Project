import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterFoyerAUniversiteComponent } from './affecter-foyer-auniversite.component';

describe('AffecterFoyerAUniversiteComponent', () => {
  let component: AffecterFoyerAUniversiteComponent;
  let fixture: ComponentFixture<AffecterFoyerAUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterFoyerAUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterFoyerAUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

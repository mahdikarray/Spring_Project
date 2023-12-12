import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteCardComponent } from './universite-card.component';

describe('UniversiteCardComponent', () => {
  let component: UniversiteCardComponent;
  let fixture: ComponentFixture<UniversiteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

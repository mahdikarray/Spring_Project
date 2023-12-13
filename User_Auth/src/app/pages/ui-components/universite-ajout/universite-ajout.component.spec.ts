import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteAjoutComponent } from './universite-ajout.component';

describe('UniversiteAjoutComponent', () => {
  let component: UniversiteAjoutComponent;
  let fixture: ComponentFixture<UniversiteAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

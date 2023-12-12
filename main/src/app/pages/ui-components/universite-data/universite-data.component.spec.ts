import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteDataComponent } from './universite-data.component';

describe('UniversiteDataComponent', () => {
  let component: UniversiteDataComponent;
  let fixture: ComponentFixture<UniversiteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

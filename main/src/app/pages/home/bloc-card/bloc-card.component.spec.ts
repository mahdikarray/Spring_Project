import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocCardComponent } from './bloc-card.component';

describe('BlocCardComponent', () => {
  let component: BlocCardComponent;
  let fixture: ComponentFixture<BlocCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSlideComponent } from './car-slide.component';

describe('CompareCarComponent', () => {
  let component: CarSlideComponent;
  let fixture: ComponentFixture<CarSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

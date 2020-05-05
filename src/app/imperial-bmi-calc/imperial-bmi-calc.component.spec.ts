import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperialBmiCalcComponent } from './imperial-bmi-calc.component';

describe('ImperialBmiCalcComponent', () => {
  let component: ImperialBmiCalcComponent;
  let fixture: ComponentFixture<ImperialBmiCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperialBmiCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperialBmiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

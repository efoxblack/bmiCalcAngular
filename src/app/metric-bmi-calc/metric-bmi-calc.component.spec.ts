import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricBmiCalcComponent } from './metric-bmi-calc.component';

describe('MetricBmiCalcComponent', () => {
  let component: MetricBmiCalcComponent;
  let fixture: ComponentFixture<MetricBmiCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricBmiCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricBmiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

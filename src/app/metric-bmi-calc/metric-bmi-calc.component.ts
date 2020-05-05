import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-bmi-calc',
  templateUrl: './metric-bmi-calc.component.html',
  styleUrls: ['./metric-bmi-calc.component.css']
})
export class MetricBmiCalcComponent implements OnInit {
  weightKG: number;

  heightM: number;

  bmiMetric: number;

  constructor() { }

  ngOnInit(): void {
  }

  bodyMassIndexCalcMetric(): number {
    return this.bmiMetric = this.weightKG / (this.heightM * this.heightM);
  }

}

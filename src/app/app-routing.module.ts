import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetricBmiCalcComponent } from './metric-bmi-calc/metric-bmi-calc.component';
import { ImperialBmiCalcComponent } from './imperial-bmi-calc/imperial-bmi-calc.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'metricbmicalc', component: MetricBmiCalcComponent},
  {path: 'imperialbmicalc', component: ImperialBmiCalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

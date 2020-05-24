import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})

export class GraficaDonaComponent {

  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: ChartType;
  @Input() doughnutleyenda: string;

  constructor() { }

}
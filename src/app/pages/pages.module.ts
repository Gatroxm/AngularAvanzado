import { NgModule } from '@angular/core';
import { SaredModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  imports: [
    SaredModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementadorComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    GraficaDonaComponent
  ]
})
export class PageModule {}
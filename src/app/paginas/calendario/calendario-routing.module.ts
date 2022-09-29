import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPage } from '../inicio/inicio.page';

import { CalendarioPage } from './calendario.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioPageRoutingModule {}

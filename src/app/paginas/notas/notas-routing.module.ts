import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasPage } from './notas.page';

const routes: Routes = [
  {
    path: '',
    component: NotasPage
  },/*
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('../calendario/calendario.module').then( m => m.CalendarioPageModule)
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasPageRoutingModule {}

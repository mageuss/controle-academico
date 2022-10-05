import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetPage } from './action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage
  },/*
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('../notas/notas.module').then( m => m.NotasPageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}

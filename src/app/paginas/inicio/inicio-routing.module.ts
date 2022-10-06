import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [

      {
        path: 'calendario',
        loadChildren: () => import('../action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
      },
      {
        path: 'notas',
        loadChildren: () => import('../notas/notas.module').then(m => m.NotasPageModule)
      }
    ]
  },
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule { }

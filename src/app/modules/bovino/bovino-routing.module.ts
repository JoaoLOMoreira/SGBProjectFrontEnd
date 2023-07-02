import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BovinoFormComponent } from './views/bovino-form/bovino-form.component';
import { BovinoListComponent } from './views/bovino-list/bovino-list.component';
import { BovinosFormResolver } from './providers/bovino.resolver';

const routes: Routes = [
  {
    path: 'bovinos',
    children: [
      {
        path: '',
        component: BovinoListComponent,
      },
      {
        path: 'adicionar',
        component: BovinoFormComponent,
        resolve: [BovinosFormResolver]
      },
      {
        path: 'editar/:id',
        component: BovinoFormComponent,
        resolve: [BovinosFormResolver]
      },
    ],
  },
  // {
  //   path: 'baixas',
  //   children:[
  //     {
  //       path:'',
  //       component: BaixaListComponent,
  //     },
  //     // {
  //     //   path: 'adicionar',
  //     //   component: BaixaFormComponent,
  //     //   resolve: []
  //     // },
  //     // {
  //     //   path: 'editar/:id',
  //     //   component: BaixaFormComponent,
  //     //   resolve: []
  //     // },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BovinoRoutingModule {}

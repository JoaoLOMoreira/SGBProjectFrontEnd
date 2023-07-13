import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BovinosFormResolver } from './providers/bovino.resolver';
import { BovinoFormComponent } from './bovino-form/bovino-form.component';
import { BovinoListComponent } from './bovino-list/bovino-list.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BovinoRoutingModule {}

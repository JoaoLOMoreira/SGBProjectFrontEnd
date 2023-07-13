import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaixaListComponent } from './baixa-list/baixa-list.component';

const routes: Routes = [{
  path: '',
  component: BaixaListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaixasRoutingModule { }

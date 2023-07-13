import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinaListComponent } from './vacina-list/vacina-list.component';



const routes: Routes = [{
  path: '',
  component: VacinaListComponent
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinaRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';
import { VacinaListComponent } from './vacina-list/vacina-list.component';


@NgModule({
  declarations: [
    VacinaListComponent
  ],
  imports: [
    CommonModule,
    VacinaRoutingModule
  ]
})
export class VacinaModule { }

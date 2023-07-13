import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaixasRoutingModule } from './baixas-routing.module';
import { BaixaListComponent } from './baixa-list/baixa-list.component';


@NgModule({
  declarations: [
    BaixaListComponent
  ],
  imports: [
    CommonModule,
    BaixasRoutingModule
  ]
})
export class BaixasModule { }

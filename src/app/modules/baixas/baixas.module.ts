import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaixasRoutingModule } from './baixas-routing.module';
import { BaixaListComponent } from './baixa-list/baixa-list.component';
import {  MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BaixaService } from './providers/baixa.service';
import { baixaPresenter } from './providers/baixa.presenter';
import { NgxsModule } from '@ngxs/store';
import { baixaState } from './store/baixa.state';


@NgModule({
  declarations: [
    BaixaListComponent
  ],
  imports: [
    CommonModule,
    BaixasRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    NgxsModule.forFeature([baixaState]),
  ],
  providers:[baixaPresenter,  BaixaService]
})
export class BaixasModule { }

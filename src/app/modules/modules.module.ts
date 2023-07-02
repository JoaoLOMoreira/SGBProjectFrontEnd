import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaixaComponent } from './baixa/baixa.component';
import { BaixaFormComponent } from './baixa/VIew/baixa-form/baixa-form.component';
import { BaixaListComponent } from './baixa/VIew/baixa-list/baixa-list.component';

@NgModule({
  declarations: [BaixaComponent, BaixaFormComponent, BaixaListComponent],
})
export class ModulesModule {}

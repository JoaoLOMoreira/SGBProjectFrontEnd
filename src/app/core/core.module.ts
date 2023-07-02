import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  exports: [CommonModule, LayoutsModule],
})
export class CoreModule {}

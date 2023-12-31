import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxsModule } from '@ngxs/store';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { BovinoRoutingModule } from './bovino-routing.module';
import { BovinoState } from './store/bovino.state';
import { BovinoPresenter } from './providers/bovino.presenter';
import { BovinosFormResolver } from './providers/bovino.resolver';
import { BovinoService } from './providers/bovino.service';
import { MatDialogModule } from '@angular/material/dialog';
import { BovinoBaixaModalComponent } from './bovino-baixa-modal/bovino-baixa-modal.component';
import { BovinoFormComponent } from './bovino-form/bovino-form.component';
import { BovinoListComponent } from './bovino-list/bovino-list.component';

@NgModule({
  declarations: [BovinoListComponent, BovinoFormComponent, BovinoBaixaModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BovinoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    NgxsModule.forFeature([BovinoState]),
  ],
  providers:[BovinoPresenter, BovinosFormResolver, BovinoService], // verificar funcionalidade do resolver 
  entryComponents: [BovinoBaixaModalComponent]
})
export class BovinoModule {}

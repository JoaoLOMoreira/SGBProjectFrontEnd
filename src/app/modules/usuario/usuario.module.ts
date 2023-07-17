import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UsuarioPresenter } from './providers/usuario.presenter';
import { UsuariosFormResolver } from './store/usuario.resolver';
import { UsuarioService } from './providers/usuario.service';
import { NgxsModule } from '@ngxs/store';
import { UsuarioState } from './store/usuario.state';
import { MatButtonModule } from '@angular/material/button';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
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
    UsuarioRoutingModule,
    NgxsModule.forFeature([UsuarioState]),
  ],
  providers:[UsuarioPresenter, UsuariosFormResolver, UsuarioService], // verificar funcionalidade do resolver 
})
export class UsuarioModule { }

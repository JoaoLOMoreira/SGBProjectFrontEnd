import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariosFormResolver } from './store/usuario.resolver';

const routes: Routes = [
{ path: '',
  component: UsuarioListComponent,
},
{
  path: 'adicionar',
  component: UsuarioFormComponent,
  resolve: [UsuariosFormResolver]
},
{
  path: 'editar/:id',
  component: UsuarioFormComponent,
  resolve: [UsuariosFormResolver]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

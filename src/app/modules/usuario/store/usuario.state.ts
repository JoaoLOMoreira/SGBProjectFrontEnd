import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { UsuarioService } from '../providers/usuario.service';

import {
  UsuarioGetAll,
  UsuarioGetOne,
  UsuarioCreate,
  UsuarioUpdate,
  UsuarioDelete,
  StateModel,
} from '../store/usuario.actions';
import { UsuarioList } from '@shared/entities/usuario.entity';

@State<StateModel>({
  name: 'usuario',
  defaults: {
    usuarios: [],
    selected: undefined,
  },
})
@Injectable()
export class UsuarioState {

  @Selector()
  static usuarioList({ usuarios }: StateModel): UsuarioList[] {
    return usuarios;
  }
  @Selector()
  static selectedUsuario({ selected }: StateModel): UsuarioList {
    return selected as UsuarioList;
  }

  constructor(private usuarioService: UsuarioService) {}

  @Action(UsuarioGetAll)
  getAll({ setState }: StateContext<StateModel>): void {
    this.usuarioService
      .getAll()
      .pipe(
        tap((result) => {
          console.log(result);
          setState({
            usuarios: result,
            selected: undefined,
          });
        })
      )
      .subscribe();
  }

  @Action(UsuarioGetOne)
  getOne(
    { patchState }: StateContext<StateModel>,
    { id } : UsuarioGetOne
  ): void {
    this.usuarioService
      .getOne(id)
      .pipe(
        tap((result) => patchState({ selected: result }))
      )
      .subscribe();
  }

  
  @Action(UsuarioCreate)
  create( ctx : StateContext<StateModel>, 
    { payload }: UsuarioCreate) {
      return this.usuarioService.create(payload);
    }
    
  @Action(UsuarioUpdate)
  update( 
    ctx : StateContext<StateModel>,
    { id, payload }: UsuarioUpdate
    ) {
      return this.usuarioService.update(payload);
    }

  @Action(UsuarioDelete)
  delete(
    { patchState }: StateContext<StateModel>,
    { payload } : UsuarioDelete,

  ){
      return this.usuarioService.delete(payload);
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import {
  UsuarioGetAll,
  UsuarioGetOne,
  UsuarioCreate,
  UsuarioUpdate,
  UsuarioDelete,
} from '../store/usuario.actions';
import { UsuarioState } from '../store/usuario.state';
import { UsuarioList } from '@shared/entities/usuario.entity';

@Injectable()
export class UsuarioPresenter {
  @Select(UsuarioState.usuarioList)
  usuariolist$!: Observable<UsuarioList[]>;
  
  @Select(UsuarioState.selectedUsuario)
  usuarioselected$!: Observable<UsuarioList>;

  unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store, 
    private router: Router,
  ) { }

  getAll(){
    return this.store.dispatch(new UsuarioGetAll());
  }

  getOne(id: string){
    return this.store.dispatch(new UsuarioGetOne(id));
  }

  create(payload: UsuarioList){
    return this.store.dispatch(new UsuarioCreate(payload))
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => {
          this.navigateToList();
        })
      )
      .subscribe();
  }

  update(payload: UsuarioList){
    this.store.dispatch(new UsuarioUpdate(payload.id as string, payload))
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => {
          this.navigateToList();
        })
      )
      .subscribe();
  }
  
  delete(payload: UsuarioList){
    this.store.dispatch(new UsuarioDelete(payload))
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => { 
          this.navigateToList();
        })
      )
      .subscribe();
  }

  destroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.warn('Destroyed')
  }

  navigateToList() {
    this.router.navigate(['/usuarios'])
  }

  navigateToAdd() {
    this.router.navigate(['usuarios/adicionar']);
  }

  navigateToUpdate(id: string) {
    this.router.navigate(['usuarios/editar', id]);
  }


}
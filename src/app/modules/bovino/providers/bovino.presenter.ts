import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import {
  BovinoGetAll,
  BovinoGetOne,
  BovinoCreate,
  BovinoUpdate,
  BovinoDelete,
} from '../store/bovino.actions';
import { BovinoState } from '../store/bovino.state';
import { BovinoList, Baixa } from '@shared/entities';

@Injectable()
export class BovinoPresenter {
  @Select(BovinoState.bovinoList)
  bovinolist$!: Observable<BovinoList[]>;

  unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store, 
    private router: Router,
  ) { }

  getAll(){
    return this.store.dispatch(new BovinoGetAll());
  }

  getOne(id: string){
    return this.store.dispatch(new BovinoGetOne(id));
  }

  create(payload: BovinoList){
    return this.store.dispatch(new BovinoCreate(payload))
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => {
          this.navigateToList();
        })
      )
      .subscribe();
  }

  update(payload: BovinoList){
    this.store.dispatch(new BovinoUpdate(payload.id as string, payload))
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => {
          this.navigateToList();
        })
      )
      .subscribe();
  }
  
  delete(payload: Baixa){
    this.store.dispatch(new BovinoDelete(payload.id as string, payload))
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
    this.router.navigate(['/bovinos'])
  }

  navigateToAdd() {
    this.router.navigate(['bovinos/adicionar']);
  }

  navigateToUpdate(id: string) {
    this.router.navigate(['bovinos/editar', id]);
  }


}
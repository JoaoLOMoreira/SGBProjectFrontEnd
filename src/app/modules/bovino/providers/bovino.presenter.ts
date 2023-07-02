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
import { Bovino } from '../store/bovino.entity';
import { BovinoState } from '../store/bovino.state';
import { Baixa } from '../store/baixa.entity';

@Injectable()
export class BovinoPresenter {
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

  create(payload: Bovino){
    console.log(payload);
    return this.store.dispatch(new BovinoCreate(payload))
    .pipe(
      takeUntil(this.unsubscribe$),
      tap(() => {
        this.goToList();
      })
    )
    .subscribe();
  }

  Update(payload: Bovino){
    this.store.dispatch(new BovinoUpdate(payload.id as string, payload))
    .pipe(
      takeUntil(this.unsubscribe$),
      tap(() => {
        this.goToList();
      })
    )
    .subscribe();
  }
  
  Delete(payload: Baixa){
    this.store.dispatch(new BovinoDelete(payload.id as string, payload))
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => { 
          this.goToList();
        })
      )
      .subscribe();
  }

  destroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.warn('Destroyed')
  }

   goToList() {
    this.router.navigate(['/bovinos'])
  }


}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { BaixaList } from '@shared/entities';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { BaixaGetAll } from '../store/baixa.actions';
import { baixaState } from '../store/baixa.state';



@Injectable()
export class baixaPresenter {
  @Select(baixaState.baixaList)
  baixalist$!: Observable<BaixaList[]>;

  unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store, 
  ) { }

  getAll(){
    return this.store.dispatch(new BaixaGetAll());
  }

  destroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.warn('Destroyed')
  }
  
}
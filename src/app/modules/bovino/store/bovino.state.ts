import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { BovinoService } from '../providers/bovino.service';
import { Bovino } from './bovino.entity';

import {
  BovinoGetAll,
  BovinoGetOne,
  BovinoCreate,
  BovinoUpdate,
  BovinoDelete,
  StateModel,
} from '../store/bovino.actions';

@State<StateModel>({
  name: 'bovino',
  defaults: {
    bovinos: [],
    selected: undefined,
  },
})
@Injectable()
export class BovinoState {

  @Selector()
  static bovinoList({ bovinos }: StateModel): Bovino[] {
    return bovinos;
  }
  @Selector()
  static selectedBovino({ selected }: StateModel): Bovino {
    return selected as Bovino;
  }

  constructor(private bovinoService: BovinoService) {}

  @Action(BovinoGetAll)
  getAll({ setState }: StateContext<StateModel>): void {
    this.bovinoService
      .getAll()
      .pipe(
        tap((result) => {
          console.log(result);
          setState({
            bovinos: result,
            selected: undefined,
          });
        })
      )
      .subscribe();
  }

  @Action(BovinoGetOne)
  getOne(
    { patchState }: StateContext<StateModel>,
    { id } : BovinoGetOne
  ): void {
    this.bovinoService
      .getOne(id)
      .pipe(
        tap((result) => patchState({ selected: result }))
      )
      .subscribe();
  }

  
  @Action(BovinoCreate)
  create( ctx : StateContext<StateModel>, 
    { payload }: BovinoCreate) {
      return this.bovinoService.create(payload);
    }
    
  @Action(BovinoUpdate)
  update( 
    ctx : StateContext<StateModel>,
    { id, payload }: BovinoUpdate
    ) {
      return this.bovinoService.update(id, payload);
    }

  @Action(BovinoDelete)
  delete(
    { patchState }: StateContext<StateModel>,
    { id, payload } : BovinoDelete,

  ){
      return this.bovinoService.delete(id, payload);
  }
}

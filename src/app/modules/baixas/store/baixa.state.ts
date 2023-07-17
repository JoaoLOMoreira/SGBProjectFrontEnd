import { Action, Selector, State, StateContext } from "@ngxs/store";
import { BaixaGetAll, StateModel } from "./baixa.actions";
import { Injectable } from "@angular/core";
import { BaixaList } from "@shared/entities";
import { BaixaService } from "../providers/baixa.service";
import { tap } from "rxjs";

@State<StateModel>({
    name: 'baixas',
    defaults: {
      baixas: [],
    },
  })
  @Injectable()
  export class baixaState {
  
  @Selector()
  static baixaList({ baixas }: StateModel): BaixaList[] {
    return baixas;
  }

  
  constructor(private baixaService: BaixaService) {}
  
  @Action(BaixaGetAll)
  getAll({ setState }: StateContext<StateModel>): void {
    this.baixaService
      .getAll()
      .pipe(
        tap((result) => {
          console.log(result);
          setState({
            baixas: result
          });
        })
      )
      .subscribe();
  }
}
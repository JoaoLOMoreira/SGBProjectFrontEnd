import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable, of } from "rxjs";
import { BovinoGetOne } from "../store/bovino.actions";
import { BovinoPresenter } from "./bovino.presenter";

@Injectable({
  providedIn: 'root'
})
export class BovinosFormResolver implements Resolve<boolean> {
  constructor(private presenter: BovinoPresenter) { }

  resolve(
    route: ActivatedRouteSnapshot, 
  ): Observable<any> {
    const id = route.paramMap.get('id');
    let edit = false;
    
    if (id) {
      this.presenter.getOne(id);
      edit = true;
    }
    
    return of(edit);
  }
}
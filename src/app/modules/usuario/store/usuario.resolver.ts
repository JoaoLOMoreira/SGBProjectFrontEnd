import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable, of } from "rxjs";
import { UsuarioGetOne } from "../store/usuario.actions";
import { UsuarioPresenter } from "../providers/usuario.presenter";

@Injectable({
  providedIn: 'root'
})
export class UsuariosFormResolver implements Resolve<boolean> {
  constructor(private presenter: UsuarioPresenter) { }

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
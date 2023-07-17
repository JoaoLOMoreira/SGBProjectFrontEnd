import { UsuarioList } from "@shared/entities/usuario.entity";


export interface StateModel {
  usuarios: UsuarioList[];
  selected?: UsuarioList;
}
export class UsuarioGetAll {
  static readonly type = '[usuario] Get All';
}
export class UsuarioGetOne {
  static readonly type = '[usuario] Get One';
  constructor(public id: string) {}
}
export class UsuarioCreate {
  static readonly type = '[usuario] Create';
  constructor(public payload: UsuarioList) {}
}
export class UsuarioUpdate {
  static readonly type = '[usuario] Update';
  constructor(public id: string, public payload: UsuarioList) {}
}

export class UsuarioDelete {
  static readonly type = '[usuario] Delete';
  constructor(public payload: UsuarioList) {}
}

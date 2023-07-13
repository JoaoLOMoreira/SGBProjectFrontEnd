import { BovinoList, Baixa } from "@shared/entities";

export interface StateModel {
  bovinos: BovinoList[];
  selected?: BovinoList;
}
export class BovinoGetAll {
  static readonly type = '[bovino] Get All';
}
export class BovinoGetOne {
  static readonly type = '[bovino] Get One';
  constructor(public id: string) {}
}
export class BovinoCreate {
  static readonly type = '[bovino] Create';
  constructor(public payload: BovinoList) {}
}
export class BovinoUpdate {
  static readonly type = '[bovino] Update';
  constructor(public id: string, public payload: BovinoList) {}
}

export class BovinoDelete {
  static readonly type = '[bovino] Delete';
  constructor(public id: string, public payload: Baixa) {}
}

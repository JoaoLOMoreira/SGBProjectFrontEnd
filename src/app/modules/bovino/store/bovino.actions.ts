import { Baixa } from './baixa.entity';
import { Bovino } from './bovino.entity';


  export interface StateModel {
    bovinos: Bovino[];
    selected?: Bovino;
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
    constructor(public payload: Bovino) {}
  }
  export class BovinoUpdate {
    static readonly type = '[bovino] Update';
    constructor(public id: string, public payload: Bovino) {}
  }
  
  export class BovinoDelete {
    static readonly type = '[bovino] Delete';
    constructor(public id: string, public payload: Baixa) {}
  }

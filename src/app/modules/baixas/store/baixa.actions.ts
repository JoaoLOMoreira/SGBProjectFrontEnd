import { BaixaList } from "@shared/entities";

export interface StateModel {
    baixas: BaixaList[];
  }

  export class BaixaGetAll {
    static readonly type = '[baixa] Get All';
  }
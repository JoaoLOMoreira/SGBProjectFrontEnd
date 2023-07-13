import { HttpClient } from "@angular/common/http";
import { GenericService } from "@module/bovino/providers/generic.service";

export interface Vacina {}

export class VacinaService extends GenericService<Vacina> {
  constructor() {
    super('vacina');
  }
}
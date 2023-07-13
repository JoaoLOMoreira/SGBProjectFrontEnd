import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BovinoList, Baixa } from '@shared/entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BovinoService {
  private endpoint = environment.backendUrl + 'bovinos';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<BovinoList[]>(this.endpoint);
  }

  getOne(id: string) {
    return this.http.get<BovinoList>(this.endpoint + '/' + id);
  }

  create(data: BovinoList) {
   delete data.id;
   return this.http.post<BovinoList>(this.endpoint, {...data});
  }

  update(data: BovinoList) {
    return this.http.put<BovinoList>(this.endpoint + '/' + data.id, data);
  }

  delete(data: Baixa) {
    return this.http.delete<Baixa>(this.endpoint + '/' + data.id?.toString() + '/' + data.motivo.toString());
  }
}

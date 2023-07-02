import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Bovino } from '../store/bovino.entity';
import { Baixa } from '../store/baixa.entity';

@Injectable({
  providedIn: 'root',
})
export class BovinoService {
  private endpoint = environment.backendUrl + 'bovinos';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>('https://localhost:7045/api/bovinos');
  }

  getOne(id: string) {
    return this.http.get<any>(this.endpoint + '/' + id);
  }

  create(data: Bovino) {
   delete data.id;
   return this.http.post<Bovino>('https://localhost:7045/api/bovinos', {...data});
  }

  update(id: string, data: Bovino) {
    return this.http.put<Bovino>(this.endpoint + '/' + id, data);
  }

  delete(id: string, payload: Baixa) {
    return this.http.delete<Baixa>(this.endpoint + '/' + payload.id?.toString() + '/' + payload.motivo.toString());
  }
}

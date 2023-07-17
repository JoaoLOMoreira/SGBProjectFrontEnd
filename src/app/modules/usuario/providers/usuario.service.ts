import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioList } from '@shared/entities/usuario.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private endpoint = environment.backendUrl + 'usuarios';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<UsuarioList[]>(this.endpoint);
  }

  getOne(id: string) {
    return this.http.get<UsuarioList>(this.endpoint + '/' + id);
  }

  create(data: UsuarioList) {
   delete data.id;
   return this.http.post<UsuarioList>(this.endpoint, {...data});
  }

  update(data: UsuarioList) {
    return this.http.put<UsuarioList>(this.endpoint + '/' + data.id, data);
  }

  delete(data: UsuarioList) {
    return this.http.delete<UsuarioList>(this.endpoint + '/' + data.id?.toString());
  }
}

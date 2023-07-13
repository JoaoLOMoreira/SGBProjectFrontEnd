import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

export class GenericService<T> {
  private _endpoint: string;
  private _http = inject(HttpClient)

  constructor(endpoint: string) {
    this._endpoint = environment.backendUrl + endpoint;
  }

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(this._endpoint);
  }

  getOne(id: string): Observable<T> {
    return this._http.get<T>(this._endpoint + id);
  }

  delete(id: string) {
    return this._http.delete<boolean>(this._endpoint + id);
  }

  create(data: T): Observable<T> {
    return this._http.post<T>(this._endpoint, data);
  }

  update(id: string, data: T): Observable<T> {
    return this._http.patch<T>(this._endpoint + id, data);
  }
}
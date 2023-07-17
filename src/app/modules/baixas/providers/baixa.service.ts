import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
  })

  export class BaixaService {
    private endpoint = environment.backendUrl + 'baixas';

    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<any[]>(this.endpoint);
      }


  }
  
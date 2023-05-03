import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = "http://localhost:8080/clientes";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}`);
  }
}

import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {

  clientes:Cliente[];

  constructor(private clienteService:ClienteService){

  }

  ngOnInit(): void {
    this.obtenerClientes();
  }
  private obtenerClientes(){
    this.clienteService.obtenerListaDeClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }

}

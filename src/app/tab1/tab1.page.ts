import { Component } from '@angular/core';
import { ServicoService } from '../services/servico.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public lista = [];

  constructor(private servico:ServicoService) {}

  public loadList(){
    this.servico.list().subscribe(dados =>{
      this.lista = dados['content'];
    });  
    }

}

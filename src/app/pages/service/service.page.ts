import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../../services/servico.service';
import * as moment from 'moment';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  titulo: string;
  descricao: string;
  importante: boolean;
  date = new Date;
  user = new Usuario();

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
  }

  public save() {
    this.user.id = 1;
    const servico = {
      titulo: this.titulo,
      descricao: this.descricao,
      emergencia: this.importante,
      datahora:null,
      usuario:this.user,
      concluido: false
    }
     debugger
    this.servicoService.create(servico);

  }

/*
      datahora: moment(this.date, 'YYYY-MM-DD').toDate(),
      */
}

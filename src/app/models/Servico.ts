import { Usuario } from "./Usuario";

export class Servico {
    titulo: string;
    descricao: string;
    datahora: Date;
    emergencia:boolean;
    concluido:boolean;
    usuario = new Usuario;
    
}
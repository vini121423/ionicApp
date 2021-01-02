import { Cidade } from "./Cidade";

export class Mecanico{
   nome_mecanico:string;
   nome_oficina:string;
   email:string;
   senha:string;
   ativo:boolean;
   endereco:string;
   soma_avaliacao:number;
   qtde_avaliacao:number;
   media:number;
   cidade = new Cidade;
}
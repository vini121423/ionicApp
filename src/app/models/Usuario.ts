import { Cidade } from "./Cidade";

export class Usuario{
   nome:string;
   sexo:string;
   email:string;
   senha:string;
   ativo:boolean;
   cidade = new Cidade;
   id:number;
}
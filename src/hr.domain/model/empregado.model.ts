import { Endereco } from "./endereco.vo";
import { IEmpregado } from "../contracts/empregado.interface";
import { BaseModel } from "../contracts/base.model";

export class Empregado extends BaseModel implements IEmpregado {
    nome: string;
    cpf: string;
    dataNascimento: Date;
    endereco?: Endereco;

    constructor({ cpf, nome, dataNascimento }: { cpf: string; nome: string; dataNascimento: Date; }) {
        super();
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
}

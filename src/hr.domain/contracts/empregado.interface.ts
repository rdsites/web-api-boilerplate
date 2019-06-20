import { Endereco } from "../model/endereco.vo";

export interface IEmpregado {
    nome: string;
    cpf: string;
    dataNascimento: Date;
    endereco?: Endereco;
}

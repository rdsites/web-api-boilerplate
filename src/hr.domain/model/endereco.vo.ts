import { BaseModel } from "../contracts/base.model";

export class Endereco extends BaseModel {
    bairro: string;
    logradouro: string;
    numero: string | undefined;
    complemento: string | undefined;
    cidade: string;
    uf: string;
    cep: string;
}

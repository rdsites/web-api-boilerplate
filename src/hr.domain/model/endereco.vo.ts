import { BaseModel } from "../contracts/base.model";

export class Endereco extends BaseModel {
    bairro: string | undefined;
    logradouro: string | undefined;
    numero: string | undefined;
    complemento: string | undefined;
    cidade: string | undefined;
    uf: string | undefined;
    cep: string | undefined;
}

import { BaseModel } from "./base.model";

export class UsuarioModel extends BaseModel{
    Nome: string;

    constructor(Id: string = '', Nome: string = '') {
        super(Id);
        this.Nome = Nome;
    }
}
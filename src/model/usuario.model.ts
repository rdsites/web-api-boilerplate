import { BaseModel } from "./base.model";

export class UsuarioModel extends BaseModel {
    public Nome!: string;
    public Group!: string;
    public Permissions!: string[];
}
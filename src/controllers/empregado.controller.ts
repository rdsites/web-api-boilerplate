import { Empregado } from "../hr.domain/model/empregado.model";
import { Endereco } from "../hr.domain/model/endereco.vo";
import { IAdmissaoService } from "../hr.domain/contracts/admissao.service";

export class EmpregadoController {

    constructor(
        private admissaoService?: IAdmissaoService
    ) { }

    public async getAll(): Promise<string[]> {
        return [];
    }

    public async getAById(id: number): Promise<Empregado> {
        return undefined;
    }

    public async create(cpf: string): Promise<Empregado> {
        return undefined;
    }

    public async update(id: number, empregado: Empregado): Promise<Empregado> {
        return undefined;
    }

    public async deleteEmpregado(id: number): Promise<boolean> {
        return true;
    }

    public async getEndereco(id: number): Promise<Endereco> {
        return new Endereco();
    }

    public async createEndereco(id: number, endereco: Endereco): Promise<Endereco> {
        return new Endereco();
    }

    public async updateEndereco(id: number, endereco: Endereco): Promise<Endereco> {
        return new Endereco();
    }

    public async deleteEndereco(id: number): Promise<boolean> {
        return true;
    }
}

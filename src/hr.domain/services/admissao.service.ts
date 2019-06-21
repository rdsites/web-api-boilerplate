import { Empregado } from "../model/empregado.model";
import { IAdmissaoService } from "../contracts/admissao.service";
import { IEmpregado } from "../contracts/empregado.interface";
import { IEndereco } from "../contracts/endereco.interface";
import { IDocumento } from "../contracts/documento.interface";

export class AdmissaoService implements IAdmissaoService {

    public iniciar(cpf: string, nome: string, dataNascimento: Date): IEmpregado {
        let admitido: IEmpregado = new Empregado(cpf, nome, dataNascimento);
        return admitido;
    }

    public admitirAposentado(empregado: IEmpregado): IEmpregado {
        throw new Error("Method not implemented.");
    }

    buscarPorCpf(cpf: string): IEmpregado {
        throw new Error("Method not implemented.");
    }

    listarAdmissoesEmAndamento(): IEmpregado[] {
        throw new Error("Method not implemented.");
    }

    listarAdmissoesFinalizadas(): IEmpregado[] {
        throw new Error("Method not implemented.");
    }

    incluirEndereco(id: string, endereco: IEndereco): IEndereco {
        throw new Error("Method not implemented.");
    }

    atualizarEndereco(empregado: IEmpregado, endereco: IEndereco): IEmpregado {
        throw new Error("Method not implemented.");
    }

    excluirEndereco(empregado: IEmpregado, endereco: IEndereco): IEmpregado {
        throw new Error("Method not implemented.");
    }

    incluirDocumento(empregado: IEmpregado, documento: IDocumento): IEmpregado {
        throw new Error("Method not implemented.");
    }

    atualizarDocumento(empregado: IEmpregado, documento: IDocumento): IEmpregado {
        throw new Error("Method not implemented.");
    }

    excluirDocumento(empregado: IEmpregado, documento: IDocumento): IEmpregado {
        throw new Error("Method not implemented.");
    }
}

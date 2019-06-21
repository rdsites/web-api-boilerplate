import { Empregado } from "../model/empregado.model";
import { IAdmissaoService } from "../contracts/admissao.service";
import { IEmpregado } from "../contracts/empregado.interface";

export class AdmissaoService implements IAdmissaoService {

    constructor() {
        console.log('Admissao....');
    }

    public iniciar(cpf: string, nome: string, dataNascimento: Date): IEmpregado | undefined {
        let admitido: IEmpregado = new Empregado(cpf, nome, dataNascimento);
        console.log(`Admitido: ${JSON.stringify(admitido)}`);
        return admitido;
    }

    public admitirAposentado(empregado: IEmpregado): IEmpregado | undefined {
        return undefined;
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

    incluirEndereco(empregado: IEmpregado, endereco: import("../contracts/endereco.interface").IEndereco): IEmpregado {
        throw new Error("Method not implemented.");
    }

    atualizarEndereco(empregado: IEmpregado, endereco: import("../contracts/endereco.interface").IEndereco): IEmpregado {
        throw new Error("Method not implemented.");
    }

    excluirEndereco(empregado: IEmpregado, endereco: import("../contracts/endereco.interface").IEndereco): IEmpregado {
        throw new Error("Method not implemented.");
    }

    incluirDocumento(empregado: IEmpregado, documento: import("../contracts/documento.interface").IDocumento): IEmpregado {
        throw new Error("Method not implemented.");
    }

    atualizarDocumento(empregado: IEmpregado, documento: import("../contracts/documento.interface").IDocumento): IEmpregado {
        throw new Error("Method not implemented.");
    }

    excluirDocumento(empregado: IEmpregado, documento: import("../contracts/documento.interface").IDocumento): IEmpregado {
        throw new Error("Method not implemented.");
    }
}

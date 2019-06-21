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

    public admitirAposentado(empregado: IEmpregado): IEmpregado | undefined{
        return undefined;
    }
}

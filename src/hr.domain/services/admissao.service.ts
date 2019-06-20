import { Empregado } from "../model/empregado.model";
import { IAdmissaoService } from "../contracts/admissao.service";

export class AdmissaoService implements IAdmissaoService {

    constructor() {
        console.log('Admissao....');
    }

    public admitir(cpf: string, nome: string, dataNascimento: Date): Empregado {
        let admitido: Empregado = new Empregado({ cpf, nome, dataNascimento });
        console.log(`Admitido: ${JSON.stringify(admitido)}`);
        return admitido;
    }

    public admitirAposentado(empregado: Empregado): Empregado {
        return new Empregado( undefined );
    }
}

import { Mediator } from "../../infra/mediator";
import { IEmpregado } from "../contracts/empregado.interface";
import { IAdmissaoService } from "../contracts/admissao.service";
import { IEndereco } from "../contracts/endereco.interface";

export class IncluirEnderecoCommand implements Mediator.ICommand<IEndereco> {
    id: string | undefined;
    body: IEmpregado | undefined;

    constructor(
        private admissaoService: IAdmissaoService
    ) { }

    excute(): IEmpregado | undefined {
        if (this.body) {
            this.body = this.admissaoService.incluirEndereco(this.id, this.body);
            if (this.body) {
                return this.body;
            } else {
                throw new Error('Erro lançado');
            }
        } else {
            return undefined;
        }
    }
}
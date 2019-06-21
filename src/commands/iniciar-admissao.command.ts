import { Mediator } from "../infra/mediator";
import { IEmpregado } from "../hr.domain/contracts/empregado.interface";
import { IAdmissaoService } from "../hr.domain/contracts/admissao.service";

export class IniciarAdmissaoCommand implements Mediator.ICommand {
    body: IEmpregado | undefined;

    constructor(
        private admissaoService: IAdmissaoService
    ){ }

    excute(): IEmpregado | undefined {
        if (this.body) {
            this.body = this.admissaoService.iniciar(this.body.cpf, this.body.nome, this.body.dataNascimento);
            return this.body;
        } else {
            return undefined;
        }
    }
}
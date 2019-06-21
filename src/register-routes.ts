import { Application, Request, Response } from "express";
import { Mediator } from "./infra/mediator";
import { IniciarAdmissaoCommand } from "./hr.domain/commands/iniciar-admissao.command";
import { IncluirEnderecoCommand } from "./hr.domain/commands/incluir-endereco";

export class RegisterRoutes {
    constructor(
        private routeURL: string,
        private app: Application,
        private mediator: Mediator.Handler,
        private iniciarAdmissaoCommand: IniciarAdmissaoCommand,
        private incluirEnderecoCommand: IncluirEnderecoCommand,
    ) {
        this.register();
    }

    register() {
        this.app.post(`${this.routeURL}/admissao`, async (req: Request, res: Response, next) => {
            this.iniciarAdmissaoCommand.body = req.body;
            await this.mediator.send(this.iniciarAdmissaoCommand)
                .then((data) => { res.status(201).json(data.body); })
                .catch((error) => { res.status(501).json(error); });
            next();
        });

        this.app.post(`${this.routeURL}/admissao/:id/endereco`, async (req: Request, res: Response, next) => {
            this.incluirEnderecoCommand.id = req.params.id;
            this.incluirEnderecoCommand.body = req.body;
            await this.mediator.send(this.incluirEnderecoCommand)
                .then((data) => { res.status(200).json(data); })
                .catch((error) => { res.status(500).json(error); });
            next();
        });
    }
}

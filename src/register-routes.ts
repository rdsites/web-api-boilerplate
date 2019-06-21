import { Application, Request, Response } from "express";
import { Mediator } from "./infra/mediator";
import { IniciarAdmissaoCommand } from "./commands/iniciar-admissao.command";

export class RegisterRoutes {
    constructor(
        private routeURL: string,
        private app: Application,
        private mediator: Mediator.Handler,
        private iniciarAdmissaoCommand: IniciarAdmissaoCommand
    ) {
        this.register();
    }

    async register() {
        this.app.post(`${this.routeURL}/admissao`, async (req: Request, res: Response, next) => {
            // All requests are treated here
            this.iniciarAdmissaoCommand.body = req.body;
            await this.mediator.send(this.iniciarAdmissaoCommand)
            .then(data => res.status(201).json(data.body))
            .catch(error => res.status(501).json(error));
            next();
        });
    }
}

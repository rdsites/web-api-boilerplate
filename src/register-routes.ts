import { Application, Request, Response } from "express";
import { AdmissaoService } from "./hr.domain/services/admissao.service";

export class RegisterRoutes {
    constructor(
        private routeURL: string,
        private app: Application,
        private admissaoService: AdmissaoService
    ) {
        this.app.get(`${routeURL}/admissao/:cpf`, (req: Request, res: Response, next) => {
            let resp = admissaoService.admitir(req.params.cpf, req.params.nome, req.params.dataNascimento);

            console.log(`[0] ${new Date()}`);
            console.log(`[1] ${req.method.toUpperCase()}: ${req.originalUrl} => ${req.path}`);
            console.log(`[2] Params: ${JSON.stringify(req.params)}`);
            console.log(`[3] Body: ${JSON.stringify(req.body)}`);
            console.log(`[4] Response: ${JSON.stringify(resp)}`);

            res.status(200).json(resp);
            next();
        });
    }
}

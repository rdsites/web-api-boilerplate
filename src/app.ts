import express, { Application } from 'express';
import bodyParser = require('body-parser');
import { RegisterRoutes } from './register-routes';
import { AdmissaoService } from './hr.domain/services/admissao.service';
import { Mediator } from './infra/mediator';
import { IniciarAdmissaoCommand } from './commands/iniciar-admissao.command';

const app: Application = express();
app.use(bodyParser.json());

new RegisterRoutes(
    '/api/v1',
    app,
    new Mediator.Handler(),
    new IniciarAdmissaoCommand(new AdmissaoService())
);

export { app };

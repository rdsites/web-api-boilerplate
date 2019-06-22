import * as http from 'http';
import express from 'express';
import * as bodyParser from 'body-parser';
import { RegisterRoutes } from './register-routes';
import { AdmissaoService } from './hr.domain/services/admissao.service';
import { Mediator } from './infra/mediator';
import { IniciarAdmissaoCommand } from './hr.domain/commands/iniciar-admissao.command';
import { IncluirEnderecoCommand } from './hr.domain/commands/incluir-endereco';

const app: express.Application = express();
app.use(bodyParser.json());

new RegisterRoutes(
    '/api/v1',
    app,
    new Mediator.Handler(),
    new IniciarAdmissaoCommand(new AdmissaoService()),
    new IncluirEnderecoCommand(new AdmissaoService())
);


const server = http.createServer(app);

app.set('port', port);

server.listen(port);

server.on('error', (err) => {
    // TODO: Create error handling
    console.info(`Listening on port ${JSON.stringify(err)}`);
});
server.on('listening', () => {
    // TODO: Improve the information after starting server
    console.info(`Listening on port ${port}`);
});
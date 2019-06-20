import express, { Application } from 'express';
import bodyParser = require('body-parser');
import { RegisterRoutes } from './register-routes';
import { AdmissaoService } from './hr.domain/services/admissao.service';

const app: Application = express();
app.use(bodyParser.json());

// TODO: Implement Mediator pattern to requests (should I?)
new RegisterRoutes(
    '/api/v1',
    app,
    new AdmissaoService()
    );

export { app };

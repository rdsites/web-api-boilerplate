import express from 'express';
import { RegisterRoutes } from './routes';
import * as swaggerUi from "swagger-ui-express";
import bodyParser = require('body-parser');

import './controllers/version.controller';
import './controllers/usuarios.controller';
import { IncomingMessage, ServerResponse } from 'http';

const app = express();
app.use(bodyParser.json());
RegisterRoutes(app);

try {
    const swaggerDoc = require('./swagger.json');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
    app.get('/api/v1/swagger.json', (req: IncomingMessage, res: ServerResponse) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(swaggerDoc));
    });
} catch (err) {
    console.log('App----');
    console.log(`App: ${JSON.stringify(err)}`);
}


console.log('v.0.0.0');
export { app };
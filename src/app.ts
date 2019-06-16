import { IncomingMessage, ServerResponse } from 'http';
import express from 'express';
import { RegisterRoutes } from './routes';
import * as swaggerUi from "swagger-ui-express";
import bodyParser = require('body-parser');

// Import here the required controllers
import './controllers/version.controller';
import './controllers/usuarios.controller';
// End import

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
    // TODO: Create error handling
}

export { app };
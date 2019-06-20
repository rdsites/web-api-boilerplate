import { app } from './app';
import * as http from 'http';

const port = 8080;
const server = http.createServer(app);

server.listen(port);
server.on('error', (err) => {
    // TODO: Create error handling
});
server.on('listening', () => {
    // TODO: Improve the information after starting server
    console.info(`Listening on port ${port}`);
});

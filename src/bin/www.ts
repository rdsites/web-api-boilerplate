import { app } from '../app';
import * as http from 'http';

const port = process.env.PORT || '3000';
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

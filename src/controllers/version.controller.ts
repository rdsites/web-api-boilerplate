import { Controller, Route, Get, Security, Response, Tags, OperationId } from "tsoa";

@Tags('Versão')
@Route('/api/v1/version')
export class Version extends Controller {
    @Security('api_key')
    @Get('/')
    public async get(): Promise<string> {
        return '1.0.0';
    }
}
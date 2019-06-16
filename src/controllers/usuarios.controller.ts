import { Controller, Security, Get, Query, Route, Tags, Post, Body } from "tsoa";
import { UsuarioModel } from "../model";

@Tags('Usuários')
@Route('/api/v1/usuarios')
export class UsuariosController extends Controller {

    // @Security('api_key')
    @Get('/')
    public async getAll(): Promise<any[]> {
        return [];
    }

    @Security('api_key')
    @Get('/group/{group}')
    public async getByGroup(group: string): Promise<any[]> {
        return [];
    }

    @Security('api_key')
    @Post('/')
    public async update(@Body() usuario: UsuarioModel): Promise<any> {
        return '200 OK';
    }
}
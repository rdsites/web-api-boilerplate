import { Controller, Security, Get, Query, Route, Tags, Post, Body } from "tsoa";
import { UsuarioModel } from "../model/usuario.model";

@Tags('Usuários')
@Route('/api/v1/usuarios')
export class UsuariosController extends Controller {

    @Security('api_key')
    @Get('/')
    public async getAll(): Promise<any[]> {
        return [];
    }

    @Security('api_key')
    @Get('/group/{group}')
    public async getByGroup(group: string): Promise<any[]> {
        console.log(group);
        return [];
    }

    @Security('api_key')
    @Post('/')
    public async update(@Body() usuario: UsuarioModel): Promise<any> {
        console.log(usuario);
        return '200 OK';
    }
}
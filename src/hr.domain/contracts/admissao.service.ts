import { IEmpregado } from "./empregado.interface";

export interface IAdmissaoService {
    admitir(cpf: string, nome: string, dataNascimento: Date): IEmpregado;
    admitirAposentado(empregado: IEmpregado): IEmpregado
}

import { IEmpregado } from "./empregado.interface";

export interface IAdmissaoService {
    iniciar(cpf: string, nome: string, dataNascimento: Date): IEmpregado | undefined;
    admitirAposentado(empregado: IEmpregado): IEmpregado | undefined;
}

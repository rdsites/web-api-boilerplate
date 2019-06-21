import { IEmpregado } from "./empregado.interface";
import { IEndereco } from "./endereco.interface";
import { IDocumento } from "./documento.interface";

export interface IAdmissaoService {
    iniciar(cpf: string, nome: string, dataNascimento: Date): IEmpregado;
    buscarPorCpf(cpf: string): IEmpregado | undefined;
    listarAdmissoesEmAndamento(): IEmpregado[] | undefined;
    listarAdmissoesFinalizadas(): IEmpregado[] | undefined;
    incluirEndereco(id: string, endereco: IEndereco): IEndereco;
    atualizarEndereco(empregado: IEmpregado, endereco: IEndereco): IEmpregado | undefined;
    excluirEndereco(empregado: IEmpregado, endereco: IEndereco): IEmpregado | undefined;
    incluirDocumento(empregado: IEmpregado, documento: IDocumento): IEmpregado | undefined;
    atualizarDocumento(empregado: IEmpregado, documento: IDocumento): IEmpregado | undefined;
    excluirDocumento(empregado: IEmpregado, documento: IDocumento): IEmpregado | undefined;
}

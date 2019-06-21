export module Mediator {

    export interface ICommand {
        body: unknown | undefined;

        excute(): unknown | boolean;
    }

    export class Handler {

        public async send(service: ICommand): Promise<ICommand> {
            return new Promise((resolve, reject) => {
                let result: unknown | boolean = service.excute();
                if (!result) {
                    reject(new Error('Teste de teste de teste de teste'));
                }
                else {
                    service.body = result;
                    resolve(service);
                }
            })
        }
    }
}

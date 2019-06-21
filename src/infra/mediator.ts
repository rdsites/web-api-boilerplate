export module Mediator {

    export interface ICommand<T> {
        id?: string | undefined;
        body?: T | undefined;
        message?: string;
        messageType?: string;
        excute(): T | boolean;
    }

    export class Handler {

        public async send(command: ICommand<any>): Promise<ICommand<any>> {
            return new Promise((resolve, reject) => {
                try {
                    let result: any | boolean = command.excute();
                    if (!result) {
                        reject(result);
                    }
                    else {
                        command.body = result;
                        resolve(command);
                    }
                } catch (error) {
                    command.message = error.message;
                    reject(command.message);
                }
            });
        }
    }
}


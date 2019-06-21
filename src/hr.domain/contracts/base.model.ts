import { IEntity } from "./entity.interface";

export abstract class BaseModel implements IEntity {
    public Id?: string;
    public CreationDate?: Date;
    public UpdateDate?: Date;
    public DeactivateDate?: Date;

    public isActive(): boolean {
        return (!this.DeactivateDate || this.DeactivateDate === undefined);
    };
}

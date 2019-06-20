/**
 * @description
 * This class encapsulates data that are default for each model be controlled by database.
 */
export abstract class BaseModel {
    public Id?: string;
    public CreationDate?: Date;
    public UpdateDate?: Date;
    public DeactivateDate?: Date;

    public isActive(): boolean {
        return (!this.DeactivateDate || this.DeactivateDate === undefined);
    };
}

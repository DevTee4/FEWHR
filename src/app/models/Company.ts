import { BaseModel } from "./BaseModel";
import { Status } from "./Status";

export class Company extends BaseModel {
    name = '';
    email = '';
    status: Status = Status.Active;
}
import { BaseModel } from "./BaseModel"

export class Error extends BaseModel {
    errorMsg = ""
    fullLog = ""
    statusCode = 0
  }

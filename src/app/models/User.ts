import { Role } from "./Role";
import { Status } from "./Status";

export class User {
  expiryDate = Date.now();
  fullName = '';
  phoneNumber = 0;
  password = '';
  email = '';
  roleId = '';
  status : Status = Status.Active;
  role : Role = new Role();
  isAppAdmin: boolean = false;
}

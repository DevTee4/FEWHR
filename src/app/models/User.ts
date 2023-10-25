import { Role } from "./Role";

export class User {
  expiryDate = Date.now();
  fullName = '';
  password = '';
  email = '';
  roleId = '';
  status = '';
  role : Role = new Role();
  isAppAdmin: boolean = false;
}

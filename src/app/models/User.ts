import { Role } from "./Role";

export class User {
  expiryDate = Date.now();
  fullName = '';
  phoneNumber = 0;
  password = '';
  email = '';
  roleId = '';
  status = '';
  role : Role = new Role();
  isAppAdmin: boolean = false;
}

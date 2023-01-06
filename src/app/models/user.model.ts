import { UserRole } from "../constants/user_roles.enum";
import { UserStatus } from "../constants/user_status.enum";

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role:UserRole;
  status: UserStatus;
  lastLogin: Date;
  createdOn: Date;
}

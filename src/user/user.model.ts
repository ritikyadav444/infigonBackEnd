import { Role } from "src/role/role.model";

export class User {
  id: number;
  username: string;
  password: string;
  roles: Role[];
}

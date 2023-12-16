import { User } from "src/user/user.model";

export class Role {
  id: number;
  name: string;
  users: User[];
}

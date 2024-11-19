import { Role } from "./role";
export class User {
    id: number = 0;
    username: string = "";
    password: string = "";
    enabled: boolean = true;
    role: Role = new Role();
  }
  

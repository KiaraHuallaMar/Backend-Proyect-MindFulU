import { User } from "./user";

export class Supportgroup {
    id: number = 0;
    description: string = "";
    creation_date: Date = new Date();
    type: string = "";
    user: User = new User();
}


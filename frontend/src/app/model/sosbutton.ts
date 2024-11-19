import { User } from "./user";

export class Sosbutton {
    id: number = 0;
    description: string = "";
    start_date: Date = new Date();
    end_date: Date = new Date();
    hour: string = ""; 
    reason: string = "";
    user: User = new User();
}

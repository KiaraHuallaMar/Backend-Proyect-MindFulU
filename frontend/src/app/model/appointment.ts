import { User } from "./user";

export class Appointment {
  id: number = 0;
  date: Date = new Date();
  hour: string = ""; // Utilizando string para simplificar el manejo del tiempo
  appointment_type: string = "";
  status: string = "";
  payment: number = 0;
  user: User = new User();
}

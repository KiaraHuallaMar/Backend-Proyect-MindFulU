import { Appointment } from "./appointment";
import { Treatment } from "./treatment";
export class Specialist {
    id: number = 0;
    name: string = "";
    lastname: string = "";
    age: number = 0;
    specialty: string = "";
    phone: number = 0;
    appointment: Appointment = new Appointment();
    treatment: Treatment = new Treatment();
  }
  
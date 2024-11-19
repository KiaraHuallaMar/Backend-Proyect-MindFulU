import { Component } from '@angular/core';
import { ListappointmentComponent } from "./listappointment/listappointment.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [ListappointmentComponent, RouterOutlet],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  constructor(public route:ActivatedRoute) {}
}

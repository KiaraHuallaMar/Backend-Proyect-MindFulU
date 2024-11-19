import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListspecialistComponent } from "./listspecialist/listspecialist.component";

@Component({
  selector: 'app-specialist',
  standalone: true,
  imports: [RouterOutlet, ListspecialistComponent],
  templateUrl: './specialist.component.html',
  styleUrl: './specialist.component.css'
})
export class SpecialistComponent {
  constructor(public route:ActivatedRoute) {}
}

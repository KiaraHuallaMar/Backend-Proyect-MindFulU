import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListtreatmentComponent } from "./listtreatment/listtreatment.component";

@Component({
  selector: 'app-treatment',
  standalone: true,
  imports: [ListtreatmentComponent, RouterOutlet],
  templateUrl: './treatment.component.html',
  styleUrl: './treatment.component.css'
})
export class TreatmentComponent {
  constructor(public route:ActivatedRoute) {}
}

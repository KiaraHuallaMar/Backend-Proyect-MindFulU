import { Component } from '@angular/core';
import { ListbuttonComponent } from "./listbutton/listbutton.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sosbutton',
  standalone: true,
  imports: [ListbuttonComponent, RouterOutlet],
  templateUrl: './sosbutton.component.html',
  styleUrl: './sosbutton.component.css'
})
export class SosbuttonComponent {
  constructor(public route:ActivatedRoute) {}
}

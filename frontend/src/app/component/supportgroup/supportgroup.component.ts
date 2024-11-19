import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListsupportgroupComponent } from './listsupportgroup/listsupportgroup.component';

@Component({
  selector: 'app-supportgroup',
  standalone: true,
  imports: [RouterOutlet, ListsupportgroupComponent],
  templateUrl: './supportgroup.component.html',
  styleUrl: './supportgroup.component.css'
})
export class SupportgroupComponent {
  constructor(public route:ActivatedRoute) {}
}

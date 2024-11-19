import { ChangeDetectorRef, Component, OnInit, ViewChild  } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormsModule} from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports:  [MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatIconModule, MatSidenavModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule, RouterLink, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer: BreakpointObserver, private cd:ChangeDetectorRef, private router:Router){

  }
  editarusuario(){
   this.router.navigateByUrl('/users');
  }
}

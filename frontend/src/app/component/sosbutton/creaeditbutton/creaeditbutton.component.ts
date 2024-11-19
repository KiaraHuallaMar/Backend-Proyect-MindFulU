import { Component, OnInit, ViewChild  } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Sosbutton } from '../../../model/sosbutton';
import { SosbuttonService } from '../../../services/sosbutton.service';

@Component({
  selector: 'app-creaeditbutton',
  standalone: true,
  imports: [MatSnackBarModule ,MatFormFieldModule, ReactiveFormsModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule, RouterLink, MatDatepickerModule, MatInputModule, MatNativeDateModule,],
  templateUrl: './creaeditbutton.component.html',
  styleUrl: './creaeditbutton.component.css'
})
export class CreaeditbuttonComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  sosbutton: Sosbutton = new Sosbutton();
  id: number = 0;
  edicion: boolean = false;
  listaUser: User[] = [];
  fechaActual: Date = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private sosbuttonService: SosbuttonService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      acodigo: [''],
      adescription: ['', Validators.required],
      astart_date: ['', Validators.required],
      aend_date: ['', Validators.required],
      ahour: ['', Validators.required],
      areason: ['', Validators.required],
      auser: ['', Validators.required],
    });
    this.userService.list().subscribe((data) => {
      this.listaUser = data;
    });
  }
  guardar(): void {
    if (this.form.valid) {
      this.sosbutton.id = this.form.value.acodigo;
      this.sosbutton.description = this.form.value.adescription;
      this.sosbutton.start_date = this.form.value.astart_date;
      this.sosbutton.end_date = this.form.value.aend_date;
      this.sosbutton.hour = this.form.value.ahour;
      this.sosbutton.reason=this.form.value.areason,
      this.sosbutton.user.id=this.form.value.auser;

      if (this.edicion) {
        this.sosbuttonService.update(this.sosbutton).subscribe((data) => {
          this.openSnackBar('Actualizado correctamente.');
          this.sosbuttonService.list().subscribe((data) => {
            this.sosbuttonService.setList(data); //arreglar el setlist(service) sino no actualiza automaticamente
            this.openSnackBar('Registro actualizado exitosamente');
          });
        });
      } else {
        this.sosbuttonService.insert(this.sosbutton).subscribe((data) => {
          this.sosbuttonService.list().subscribe((data) => {
            this.sosbuttonService.setList(data);
            this.openSnackBar('Registro creado exitosamente');
          });
        });
      }
      this.router.navigate(['sosbutton']);
    } else {
      this.openSnackBar('Por favor, rellena todos los campos obligatorios');
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

 init() {
   if (this.edicion) {
     this.sosbuttonService.listId(this.id).subscribe((data) => {
       this.form = new FormGroup({
         acodigo: new FormControl(data.id),
         adescription: new FormControl(data.description),
         astart_date: new FormControl(data.start_date),
         aend_date:new FormControl(data.end_date),
         ahour: new FormControl(data.hour),
         areason: new FormControl(data.reason),
         auser: new FormControl(data.user.id)
       });
     });
   }
 }
 cancel(): void {
  this.openSnackBar('Operación cancelada');
  this.router.navigate(['sosbutton']);
}
}
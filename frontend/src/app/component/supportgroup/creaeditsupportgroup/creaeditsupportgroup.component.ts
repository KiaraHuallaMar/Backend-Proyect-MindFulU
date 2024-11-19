import { Component, OnInit, ViewChild  } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Supportgroup } from '../../../model/supportgroup';
import { User } from '../../../model/user';
import { SupportgroupService } from '../../../services/supportgroup.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-creaeditsupportgroup',
  standalone: true,
  imports: [MatSnackBarModule ,MatFormFieldModule, ReactiveFormsModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule, RouterLink, MatDatepickerModule, MatInputModule, MatNativeDateModule,],
  templateUrl: './creaeditsupportgroup.component.html',
  styleUrl: './creaeditsupportgroup.component.css'
})
export class CreaeditsupportgroupComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  supportgroup: Supportgroup = new Supportgroup();
  id: number = 0;
  edicion: boolean = false;
  listaUser: User[] = [];
  fechaActual: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private supportgroupService: SupportgroupService,
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
      acreation_date: ['', [Validators.required, Validators.minLength(6)]],
      atype: ['', Validators.required],
      auser: ['', Validators.required],
    });
    this.userService.list().subscribe((data) => {
      this.listaUser = data;
    });
  }
  guardar(): void {
    if (this.form.valid) {
      this.supportgroup.id = this.form.value.acodigo;
      this.supportgroup.description = this.form.value.adescription;
      this.supportgroup.creation_date = this.form.value.acreation_date;
      this.supportgroup.type = this.form.value.atype;
      this.supportgroup.user.id=this.form.value.auser;

      if (this.edicion) {
        this.supportgroupService.update(this.supportgroup).subscribe((data) => {
          this.openSnackBar('Actualizado correctamente.');
          this.supportgroupService.list().subscribe((data) => {
            this.supportgroupService.setList(data); //arreglar el setlist(service) sino no actualiza automaticamente
            this.openSnackBar('Registro actualizado exitosamente');
          });
        });
      } else {
        this.supportgroupService.insert(this.supportgroup).subscribe((data) => {
          this.supportgroupService.list().subscribe((data) => {
            this.supportgroupService.setList(data);
            this.openSnackBar('Registro creado exitosamente');
          });
        });
      }
      this.router.navigate(['supportgroup']);
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
     this.supportgroupService.listId(this.id).subscribe((data) => {
       this.form = new FormGroup({
          acodigo: new FormControl(data.id),
          adescription: new FormControl(data.description),
          acreation_date: new FormControl(data.creation_date),
          atype:new FormControl(data.type),
         auser: new FormControl(data.user.id)
       });
     });
   }
 }
 cancel(): void {
  this.openSnackBar('Operación cancelada');
  this.router.navigate(['supportgroup']);
}


}
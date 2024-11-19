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
import { Appointment } from '../../../model/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-creaeditappointment',
  standalone: true,
  imports: [MatSnackBarModule ,MatFormFieldModule, ReactiveFormsModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule, RouterLink, MatDatepickerModule, MatInputModule, MatNativeDateModule,],
  templateUrl: './creaeditappointment.component.html',
  styleUrl: './creaeditappointment.component.css'
})
export class CreaeditappointmentComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  appointment: Appointment = new Appointment();
  id: number = 0;
  edicion: boolean = false;
  listaUser: User[] = [];
  fechaActual: Date = new Date();
  listastatus: { value: String; viewValue: string }[] = [
    { value: 'Pendiente', viewValue: 'Pendiente' },
    { value: 'Finalizado', viewValue: 'Finalizado' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
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
      aappointment_type: ['', Validators.required],
      apayment: ['', [Validators.required, Validators.minLength(6)]],
      astatus: ['', Validators.required],
      ahour: ['', Validators.required],
      adate: ['', Validators.required],
      auser: ['', Validators.required],
    });
    this.userService.list().subscribe((data) => {
      this.listaUser = data;
    });
  }
  guardar(): void {
    if (this.form.valid) {
      this.appointment.id = this.form.value.acodigo;
      this.appointment.appointment_type = this.form.value.aappointment_type;
      this.appointment.date = this.form.value.adate;
      this.appointment.hour = this.form.value.ahour;
      this.appointment.status = this.form.value.astatus;
      this.appointment.payment=this.form.value.apayment,
      this.appointment.user.id=this.form.value.auser;

      if (this.edicion) {
        this.appointmentService.update(this.appointment).subscribe((data) => {
          this.openSnackBar('Actualizado correctamente.');
          this.appointmentService.list().subscribe((data) => {
            this.appointmentService.setList(data); //arreglar el setlist(service) sino no actualiza automaticamente
            this.openSnackBar('Registro actualizado exitosamente');
          });
        });
      } else {
        this.appointmentService.insert(this.appointment).subscribe((data) => {
          this.appointmentService.list().subscribe((data) => {
            this.appointmentService.setList(data);
            this.openSnackBar('Registro creado exitosamente');
          });
        });
      }
      this.router.navigate(['appointment']);
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
     this.appointmentService.listId(this.id).subscribe((data) => {
       this.form = new FormGroup({
         acodigo: new FormControl(data.id),
         aappointment_type: new FormControl(data.appointment_type),
         adate: new FormControl(data.date),
         ahour:new FormControl(data.hour),
         apayment: new FormControl(data.payment),
         astatus: new FormControl(data.status),
         auser: new FormControl(data.user.id)
       });
     });
   }
 }
 cancel(): void {
  this.openSnackBar('Operación cancelada');
  this.router.navigate(['appointment']);
}
}
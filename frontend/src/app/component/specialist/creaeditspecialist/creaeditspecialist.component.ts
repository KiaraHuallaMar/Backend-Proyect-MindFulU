import { Component, OnInit, ViewChild } from '@angular/core';
import { Specialist } from '../../../model/specialist';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SpecialistService } from '../../../services/specialist.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Appointment } from '../../../model/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { Treatment } from '../../../model/treatment';
import { TreatmentService } from '../../../services/treatment.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-creaeditspecialist',
  standalone: true,
  imports: [MatSnackBarModule ,MatFormFieldModule, ReactiveFormsModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule, RouterLink, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './creaeditspecialist.component.html',
  styleUrl: './creaeditspecialist.component.css'
})
export class CreaeditspecialistComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  specialist: Specialist = new Specialist();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaCita: Appointment[] = [];
  listaTratamiento: Treatment[] = [];

  constructor(
    private specialistService: SpecialistService,
    private appointmentService: AppointmentService,
    private treatmentService: TreatmentService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      acodigo: [''],
      aname: ['', Validators.required],
      alastname: ['', Validators.required],
      aage: ['', Validators.required],
      aspecialty: ['', Validators.required],
      aphone: ['', Validators.required],
      aappointment: ['', Validators.required],
      atreatment: ['', Validators.required]
    });
    this.appointmentService.list().subscribe((data) => {
      this.listaCita = data;
    });
    this.treatmentService.list().subscribe((data) => {
      this.listaTratamiento = data;
    });
  }

  guardar(): void {
    if (this.form.valid) {
    this.specialist.id = this.form.value.acodigo;
    this.specialist.name = this.form.value.aname;
    this.specialist.lastname = this.form.value.alastname;
    this.specialist.age = this.form.value.aage;
    this.specialist.specialty = this.form.value.aspecialty;
    this.specialist.phone = this.form.value.aphone;
    this.specialist.appointment.id=this.form.value.aappointment;
    this.specialist.treatment.id=this.form.value.atreatment;

    if (this.edicion) {
      this.specialistService.update(this.specialist).subscribe((data) => {
        this.openSnackBar('Actualizado correctamente.');
        this.specialistService.list().subscribe((data) => {
          this.specialistService.setList(data); //arreglar el setlist(service) sino no actualiza automaticamente
          this.openSnackBar('Registro actualizado exitosamente');
        });
      });
    } else {
      this.specialistService.insert(this.specialist).subscribe((data) => {
        this.specialistService.list().subscribe((data) => {
          this.specialistService.setList(data);
          this.openSnackBar('Registro creado exitosamente');
        });
      });
    }
    this.router.navigate(['specialist']);
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
      this.specialistService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          acodigo: new FormControl(data.id),
          aname: new FormControl(data.name),
          alastname: new FormControl(data.lastname),
          aage: new FormControl(data.age),
          aspecialty: new FormControl(data.specialty),
          aphone: new FormControl(data.phone),
          aappointment: new FormControl(data.appointment.id),
          atreatment: new FormControl(data.treatment.id),
        });
      });
    }
  }

  cancel(): void {
    this.openSnackBar('Operación cancelada');
    this.router.navigate(['appointment']);
   }
}

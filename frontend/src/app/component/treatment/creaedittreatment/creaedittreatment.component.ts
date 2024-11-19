import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Treatment } from '../../../model/treatment';
import { TreatmentService } from '../../../services/treatment.service';
import { RouterLink, RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-creaedittreatment',
  standalone: true,
  imports: [MatSnackBarModule ,MatFormFieldModule, ReactiveFormsModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule, RouterLink, MatInputModule,],
  templateUrl: './creaedittreatment.component.html',
  styleUrl: './creaedittreatment.component.css'
})
export class CreaedittreatmentComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  treatment: Treatment = new Treatment();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  estado:boolean=true;

  constructor(
    private formBuilder: FormBuilder,
    private treatmentService: TreatmentService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>
      {
        this.id=data['id'];
        this.edicion=data['id']!=null;
        this.init();
      }
    );

    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      category_type: ['', Validators.required],
      description: ['', Validators.required],
      payment: ['', [Validators.required, Validators.minLength(6)]],
    });
   // this.roleService.list().subscribe((data) => {
  //    this.lista = data;
  //  })
  ;
  
  }
  aceptar(): void {
    if (this.form.valid) {
      this.treatment.id = this.form.value['id'];
      this.treatment.name = this.form.value['name'];
      this.treatment.category_type = this.form.value['category_type'];
      this.treatment.description = this.form.value['description'];
      this.treatment.payment = this.form.value['payment'];

      if (this.edicion) {
        this.treatmentService.update(this.treatment).subscribe((data) => {
          this.openSnackBar('Actualizado correctamente.');
          this.treatmentService.list().subscribe((data) => {
            this.treatmentService.setList(data);
            this.openSnackBar('Registro actualizado exitosamente');
          });
        });
      } else {
        this.treatmentService.insert(this.treatment).subscribe((data) => {
          this.treatmentService.list().subscribe((data) => {
            this.treatmentService.setList(data);
            this.openSnackBar('Registro creado exitosamente');
          });
        });
      }
      this.router.navigate(['treatment']);
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
      this.treatmentService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name),
          category_type: new FormControl(data.category_type),
          description: new FormControl(data.description),
          payment: new FormControl(data.payment)
        });
      });
    }
  }
  cancelar() {
    this.openSnackBar('Operación cancelada');
    this.router.navigate(['treatment']);
  }
}

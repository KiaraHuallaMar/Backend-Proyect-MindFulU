import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { User } from '../../../model/user';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Role } from '../../../model/role';
import { UserService } from '../../../services/user.service';
import { RoleService } from '../../../services/role.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-creaedituser',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './creaedituser.component.html',
  styleUrl: './creaedituser.component.css'
})
export class CreaedituserComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  estado:boolean=true;
  listaRoles: Role[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
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
      uid: [''],
      uusername: ['', Validators.required],
      upassword: ['', [Validators.required, Validators.minLength(6)]],
      urole: ['', Validators.required]
    });
    this.roleService.list().subscribe((data) => {
      this.listaRoles = data;
    });

  }
  aceptar(): void {
    if (this.form.valid) {
      this.user.id = this.form.value.uid;
      this.user.username = this.form.value.uusername;
      this.user.password = this.form.value.upassword;
      this.user.role.id = this.form.value.urole;
 
      if (this.edicion) {
        this.userService.update(this.user).subscribe((data) => {
          this.openSnackBar('Actualizado correctamente.');
          this.userService.list().subscribe((data) => {
            this.userService.setList(data);
            this.openSnackBar('Registro actualizado exitosamente');
          });
        });
      } else {
        this.userService.insert(this.user).subscribe((data) => {
          this.userService.list().subscribe((data) => {
           this.userService.setList(data);
            this.openSnackBar('Registro creado exitosamente');
          });
        });
      }
      this.router.navigate(['users']);
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
      this.userService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({ 
          uid: new FormControl(data.id),
          uusername: new FormControl(data.username),
          upassword: new FormControl(data.password),
          urole: new FormControl(data.role.id)
        });
      });
    }
  }
  cancelar() {
    this.openSnackBar('Operación cancelada');
    this.router.navigate(['users']);
  }
}

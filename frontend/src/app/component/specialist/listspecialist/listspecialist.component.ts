import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Specialist } from '../../../model/specialist';
import { SpecialistService } from '../../../services/specialist.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';
@Component({
  selector: 'app-listspecialist',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule, MatPaginatorModule, RouterLink, MatGridListModule, CommonModule, MatDialogModule ],
  templateUrl: './listspecialist.component.html',
  styleUrl: './listspecialist.component.css'
})
export class ListspecialistComponent implements OnInit {
  lista: Specialist[] = [];
  displayedColumns = ['id','name', 'lastname', 'age', 'specialty', 'phone', 'category_type', 'appointment_type','editar', 'eliminar'];
  dataSource = new MatTableDataSource<Specialist>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private specialistService: SpecialistService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.specialistService.list().subscribe(data => {
      this.dataSource.data = data;
    });
    this.specialistService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogoComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      } else {
        console.log('FALSE');
      }
    });
  }
  editar(id: number) {
    this.router.navigate(['specialist/ediciones', id]);
  }
  
  filtrar(e: any): void {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  delete(id: number): void {
    this.specialistService.delete(id).subscribe(() => {
      this.specialistService.list().subscribe(data => {
        this.specialistService.setList(data);
      });
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  regresar(): void {
    this.router.navigateByUrl('menu');
  }

  nuevo(): void {
    this.router.navigateByUrl('specialist/nuevo');
  }
}

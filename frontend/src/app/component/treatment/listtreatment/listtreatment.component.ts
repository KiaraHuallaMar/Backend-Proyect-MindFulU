import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { Treatment } from '../../../model/treatment';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TreatmentService } from '../../../services/treatment.service';

@Component({
  selector: 'app-listtreatment',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule, MatPaginatorModule, RouterLink],
  templateUrl: './listtreatment.component.html',
  styleUrl: './listtreatment.component.css'
})
export class ListtreatmentComponent {
  dataSource: MatTableDataSource<Treatment> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'name', 'category_type', 'description', 'payment', 'editar', 'eliminar'];
  constructor(private treatmentservice: TreatmentService, private roter:Router) {}

  ngOnInit(): void {
    this.treatmentservice.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.treatmentservice.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.treatmentservice.delete(id).subscribe((data) => {
      this.treatmentservice.list().subscribe((data) => {
        this.treatmentservice.setList(data);
      });
    });
  }
  regresar(){
    this.roter.navigateByUrl('menu');
}
nuevo(){
  this.roter.navigateByUrl('treatment/nuevo');
}
}

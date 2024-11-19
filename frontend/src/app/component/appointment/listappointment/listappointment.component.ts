import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { Appointment } from '../../../model/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listappointment',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule, MatPaginatorModule, RouterLink, MatGridListModule, CommonModule ],
  templateUrl: './listappointment.component.html',
  styleUrl: './listappointment.component.css'
})
export class ListappointmentComponent implements OnInit {
  displayedColumns = ['id', 'date', 'hour', 'appointment_type', 'status', 'payment', 'username', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource<Appointment>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.list().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  filtrar(event: Event): void {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminar(id: number) {
    this.appointmentService.delete(id).subscribe((data) => {
      this.appointmentService.list().subscribe((data) => {
        this.appointmentService.setList(data);
      });
    });
  }
}

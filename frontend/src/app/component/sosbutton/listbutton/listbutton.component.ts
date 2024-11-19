import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { Sosbutton } from '../../../model/sosbutton';
import { SosbuttonService } from '../../../services/sosbutton.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listbutton',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule, MatPaginatorModule, RouterLink, MatGridListModule, CommonModule ],
  templateUrl: './listbutton.component.html',
  styleUrl: './listbutton.component.css'
})
export class ListbuttonComponent implements OnInit {
  displayedColumns = ['id', 'description', 'start_date', 'end_date', 'hour', 'reason', 'username', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource<Sosbutton>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sosbuttonService: SosbuttonService) { }

  ngOnInit(): void {
    this.sosbuttonService.list().subscribe(data => {
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
    this.sosbuttonService.delete(id).subscribe((data) => {
      this.sosbuttonService.list().subscribe((data) => {
        this.sosbuttonService.setList(data);
      });
    });
  }
}

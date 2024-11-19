import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { Supportgroup } from '../../../model/supportgroup';
import { SupportgroupService } from '../../../services/supportgroup.service';

@Component({
  selector: 'app-listsupportgroup',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule, MatPaginatorModule, RouterLink, MatGridListModule, CommonModule ],
  templateUrl: './listsupportgroup.component.html',
  styleUrl: './listsupportgroup.component.css'
})
export class ListsupportgroupComponent implements OnInit {
  displayedColumns = ['id', 'description', 'creation_date', 'type', 'username', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource<Supportgroup>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private supportgroupService: SupportgroupService) { }

  ngOnInit(): void {
    this.supportgroupService.list().subscribe(data => {
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
    this.supportgroupService.delete(id).subscribe((data) => {
      this.supportgroupService.list().subscribe((data) => {
        this.supportgroupService.setList(data);
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listuser',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule, MatPaginatorModule, RouterLink],
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.css'
})
export class ListuserComponent implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'username', 'role', 'editar', 'eliminar'];
  constructor(private uS: UserService, private roter:Router) {}

  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.uS.delete(id).subscribe((data) => {
      this.uS.list().subscribe((data) => {
        this.uS.setList(data);
      });
    });
  }
  regresar(){
    this.roter.navigateByUrl('menu');
}
nuevo(){
  this.roter.navigateByUrl('users/nuevo');
}
}

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserComponent } from './component/user/user.component';
import { LoginService } from './services/login.service';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule, 
    CommonModule,
    UserComponent,
    MatToolbarModule,
    MatSidenav,
    MatMenuModule,
    MatSidenavModule,
    MatListModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MindfulU';
  role: string = '';
  username: string ='';
  constructor(private loginService: LoginService) {}
  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role = this.loginService.showRole();
    this.username = this.loginService.showUser();
    return this.loginService.verificar();
  }
  isAdmin() {
    return this.role === 'ADMINISTRADOR';
  }

  isUni() {
    return this.role === 'UNIVERSITARIO';
  }
}

import { Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { CreaedituserComponent } from './component/user/creaedituser/creaedituser.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { CreaeditappointmentComponent } from './component/appointment/creaeditappointment/creaeditappointment.component';
import { MenuComponent } from './component/menu/menu.component';
import { SpecialistComponent } from './component/specialist/specialist.component';
import { CreaeditspecialistComponent } from './component/specialist/creaeditspecialist/creaeditspecialist.component';
import { SupportgroupComponent } from './component/supportgroup/supportgroup.component';
import { CreaeditsupportgroupComponent } from './component/supportgroup/creaeditsupportgroup/creaeditsupportgroup.component';
import { TreatmentComponent } from './component/treatment/treatment.component';
import { CreaedittreatmentComponent } from './component/treatment/creaedittreatment/creaedittreatment.component';
import { SosbuttonComponent } from './component/sosbutton/sosbutton.component';
import { CreaeditbuttonComponent } from './component/sosbutton/creaeditbutton/creaeditbutton.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { seguridadGuard } from './guard/seguridad.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
    {
        path: 'users',
        component: UserComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaedituserComponent,
          },
          {
            path: 'edicion/:id',
            component: CreaedituserComponent,
          },
        ],
      },
      {
        path: 'appointment',
        component: AppointmentComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditappointmentComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditappointmentComponent,
          },
        ],
      },
      {
        path: 'specialist',
        component: SpecialistComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditspecialistComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditspecialistComponent,
          },
        ],
      },
      {
        path: 'supportgroup',
        component: SupportgroupComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditsupportgroupComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditsupportgroupComponent,
          },
        ],
      },
      {
        path: 'treatment',
        component: TreatmentComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaedittreatmentComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaedittreatmentComponent,
          },
        ],
      },
      {
        path: 'sosbutton',
        component: SosbuttonComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditbuttonComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditbuttonComponent,
          },
        ],
      },
      {
        path: 'menu',
        component: MenuComponent,
        children: [],
      },
      {
        path: 'homes',
        component: HomeComponent,
        canActivate: [seguridadGuard], // solo construcciones, se debe agregar a cada uno
      },
];

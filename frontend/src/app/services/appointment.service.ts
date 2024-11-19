import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { Appointment } from '../model/appointment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private url = `${base_url}/appointment`;
  private listaCambio = new Subject<Appointment[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.url + '/listar');
  }
  insert(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.url + '/registrar', appointment);
  }

  update(appointment: Appointment): Observable<Appointment> {
       return this.http.put<Appointment>(`${this.url}/actualizar`, appointment);
     }

  delete(id: number): Observable<Appointment> {
    return this.http.delete<Appointment>(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Appointment>(`${this.url}/${id}`);
  }

  setList(listaNueva: Appointment[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<Appointment[]> {
    return this.listaCambio.asObservable();
  }
}

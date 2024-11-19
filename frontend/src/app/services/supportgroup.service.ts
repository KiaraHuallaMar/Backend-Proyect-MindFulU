import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Appointment } from '../model/appointment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';
import { Supportgroup } from '../model/supportgroup';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class SupportgroupService {
  private url = `${base_url}/supportgroup`;
  private listaCambio = new Subject<Supportgroup[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<Supportgroup[]> {
    return this.http.get<Supportgroup[]>(`${this.url}/listar`);
  }
  
  insert(supportgroup: Supportgroup): Observable<Supportgroup> {
    return this.http.post<Supportgroup>(`${this.url}/registrar`, supportgroup);
  }  

  update(supportgroup: Supportgroup): Observable<Supportgroup> {
       return this.http.put<Supportgroup>(`${this.url}/actualizar`, supportgroup);
     }

  delete(id: number): Observable<Supportgroup> {
    return this.http.delete<Supportgroup>(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Supportgroup>(`${this.url}/${id}`);
  }

  setList(listaNueva: Supportgroup[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<Supportgroup[]> {
    return this.listaCambio.asObservable();
  }
}

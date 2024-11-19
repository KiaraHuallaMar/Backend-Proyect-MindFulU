import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Specialist } from '../model/specialist';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  private url = `${environment.base}/specialist`; // Asegúrate de que el URL base incluya "/especialista"
  private listaCambio = new Subject<Specialist[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.url}/listar`);
  }

  insert(specialist: Specialist): Observable<Specialist> {
    return this.http.post<Specialist>(`${this.url}/registrar`, specialist);
  }

  update(specialist: Specialist): Observable<Specialist> {
    return this.http.put<Specialist>(`${this.url}/actualizar`, specialist);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  listId(id: number): Observable<Specialist> {
    return this.http.get<Specialist>(`${this.url}/${id}`);
  }

  setList(listaNueva: Specialist[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<Specialist[]> {
    return this.listaCambio.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { Treatment } from '../model/treatment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private url = `${environment.base}/treatment`; 
  private listaCambio = new Subject<Treatment[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.url}/listar`);
  }

  insert(treatment: Treatment): Observable<Treatment> {
    return this.http.post<Treatment>(`${this.url}/registrar`, treatment);
  }  

  update(treatment: Treatment): Observable<Treatment> {
    return this.http.put<Treatment>(`${this.url}/actualizar`, treatment);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id: number) {
      return this.http.get<Treatment>(`${this.url}/${id}`)
  }

  setList(listaNueva: Treatment[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<Treatment[]> {
    return this.listaCambio.asObservable();
  }
  
}
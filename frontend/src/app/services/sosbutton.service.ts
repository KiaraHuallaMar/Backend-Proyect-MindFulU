import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';
import { Sosbutton } from '../model/sosbutton';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class SosbuttonService {
  private url = `${base_url}/sosbutton`;
  private listaCambio = new Subject<Sosbutton[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<Sosbutton[]> {
    return this.http.get<Sosbutton[]>(this.url + '/listar');
  }
  insert(sosbutton: Sosbutton): Observable<Sosbutton> {
    return this.http.post<Sosbutton>(this.url + '/registrar', sosbutton);
  }

  update(sosbutton: Sosbutton): Observable<Sosbutton> {
       return this.http.put<Sosbutton>(`${this.url}/actualizar`, sosbutton);
     }

  delete(id: number): Observable<Sosbutton> {
    return this.http.delete<Sosbutton>(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Sosbutton>(`${this.url}/${id}`);
  }

  setList(listaNueva: Sosbutton[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<Sosbutton[]> {
    return this.listaCambio.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.base}/users`; 
  private listaCambio = new Subject<User[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/listar`);
  }
    
  insert(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/registrar`, user);
  }  

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/actualizar`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id: number) {
      return this.http.get<User>(`${this.url}/${id}`)
  }

  setList(listaNueva: User[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<User[]> {
    return this.listaCambio.asObservable();
  }
  
}
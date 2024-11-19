import { Injectable } from '@angular/core';
import { Role } from '../model/role';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from '../../enviroments/environment';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private url = `${base_url}/role`;
  private listaCambio = new Subject<Role[]>();
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Role[]>(this.url + "/listar");
  }
  insert(role: Role) {
    return this.http.post(this.url +"/registrar", role);
  }
  delete(id: number) {
    return this.http.delete(this.url+"/"+id);
  }
  setList(listaNueva: Role[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}

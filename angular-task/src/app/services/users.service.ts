import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }
  
  addUser(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/users', data);
  };

  getUsers(): Observable<any> {
    return this._http.get('http://localhost:3000/users');
  };

  deleteUser(id: string): Observable<any> {
    return this._http.delete(`http://localhost:3000/users/${id}`);
  };

  updateUser(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/users/${id}`, data);
  }
}

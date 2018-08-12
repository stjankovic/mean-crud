import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:5000/api/users/')
  }

  getUser(userId) {
    return this.http.get('http://localhost:5000/api/users/'+userId)
  }

  deleteUser(userId) {
    return this.http.delete('http://localhost:5000/api/users/'+userId)
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/users/', user);
  } 

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://whispering-beyond-31054.herokuapp.com/api/users/')
  }

  getUser(userId) {
    return this.http.get('https://whispering-beyond-31054.herokuapp.com/api/users/'+userId)
  }

  deleteUser(userId) {
    return this.http.delete('https://whispering-beyond-31054.herokuapp.com/api/users/'+userId)
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>('https://whispering-beyond-31054.herokuapp.com/api/users/', user);
  }

  updateUser(userId, user: any): Observable<any> {
    return this.http.put('https://whispering-beyond-31054.herokuapp.com/api/users/'+userId, user)
  }

}

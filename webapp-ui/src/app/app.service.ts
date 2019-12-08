import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'http://0.0.0.0:8080/users';

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Array<any>>(this.baseUrl, this.getHeaders(localStorage.getItem('auth')));
  }

  create(user: any) {
    return this.http.post(this.baseUrl + '/add', user, this.getHeaders(localStorage.getItem('auth')));
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/'+id, this.getHeaders(localStorage.getItem('auth')));
  }

  getHeaders(auth){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': auth
      })
    };
  }

  login(username:any, password:any){
    const auth = 'Basic ' + btoa(username + ':' + password)
    const request = this.http.get(this.baseUrl, this.getHeaders(auth));
    request.subscribe(
      data => {
        localStorage.setItem('auth', auth);
      },
      error => {
        localStorage.removeItem('auth');

      })
    return request;
  }
}

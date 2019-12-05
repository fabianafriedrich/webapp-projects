import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Array<any>>(this.baseUrl);
  }

  create(user: any) {
    return this.http.post(this.baseUrl + '/add', user);
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/' +id);
  }

  login(username: any, password:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password),
      })
    };
    debugger;
    return this.http.get(this.baseUrl, httpOptions);
  }
}

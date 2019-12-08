import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
/*Service layer to communicate with the API back-end by JSON*/
export class AppService {

  baseUrl = 'https://0.0.0.0:8443/users';


  constructor(private http: HttpClient) { }

  /*Get users from the API passing the auth token by parameter */
  listAll() {
    return this.http.get<Array<any>>(this.baseUrl, this.getHeaders(localStorage.getItem('auth')));
  }

  /*Post to great new user*/
  create(user: any) {
    return this.http.post(this.baseUrl + '/add', user, this.getHeaders(localStorage.getItem('auth')));
  }
  /*Deleting from API by Id*/
  delete(id: any) {
    return this.http.delete(this.baseUrl + '/'+id, this.getHeaders(localStorage.getItem('auth')));
  }

  /*Creating Headers to sent into the HTTP request*/
  getHeaders(auth){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': auth
      })
    };
  }
  /*Login functionality*/
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

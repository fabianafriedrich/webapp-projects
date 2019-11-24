import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post(this.baseUrl, user);
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/' +id);
  }
}

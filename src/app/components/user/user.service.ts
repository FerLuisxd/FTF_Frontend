import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000/api/users'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl);
  }
  postUser(data:User){
    return this.http.post<User>(this.apiUrl,data)
  }
  putUser(data:User,id){
    return this.http.put<User>(this.apiUrl+`/${id}`,data)
  }
  deleteUser(id){
    return this.http.delete<User>(this.apiUrl+`/${id}`)
  }
}

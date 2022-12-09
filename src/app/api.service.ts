import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addUsers=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addusers",dataToSend)
  }
  searchUsers=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/usersearch",dataToSend)
  }
  viewUsers=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewprofile",dataToSend)
  }
}

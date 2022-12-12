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
  addComplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addcomplaint",dataToSend)
  }
  viewallComplaints=()=>
  {
return this.http.get("http://localhost:8080/viewallcomplaints")
  }
  userviewComplaint=(dataToSend:any)=>
  {
     return this.http.post("http://localhost:8080/mycomplaint",dataToSend)
  }
}

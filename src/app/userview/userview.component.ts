import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {
  userId:any=""
  constructor(private api:ApiService){
  this.userId=localStorage.getItem("userInfo")
  let data:any={
    "userid":this.userId
  }
    this.api.userviewComplaint(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response;
      }
    )
  }
  data:any=[]



}

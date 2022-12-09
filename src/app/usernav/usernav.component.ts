import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent {
  userid:any=""
  userdata:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userInfo")
    let data:any={
      "id":this.userid
    }
    this.api.viewUsers(data).subscribe(
      (response:any)=>
      {
        this.userdata=response;
      }
    )
  }
  

}

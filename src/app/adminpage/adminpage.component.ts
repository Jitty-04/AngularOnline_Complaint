import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  username=""
  password=""

  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    if(this.username=="admin" && this.password=="12345"){
      
      
      this.route.navigate(["adminhome"])
    }
    else{
      this.password=""
      this.username=""
      alert("Invalid Credentials")
    }
  }
 

}

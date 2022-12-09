import { Component } from '@angular/core';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  address=""
  phno=""
  email=""
  password=""
  confirmpassword=""
 
readValues=()=>
{
  let data:any={
    "name":this.name,"address":this.address,"phno":this.phno,"email":this.email,
    "password":this.password
  }
  console.log(data)
  

}
}

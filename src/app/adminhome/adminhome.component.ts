import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  constructor(private api:ApiService){
    api.viewallComplaints().subscribe(
      (response:any)=>
      {
        this.data=response;
      }
    )
  }
  
    data:any=[] 


}

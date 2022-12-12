import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserregComponent } from './userreg/userreg.component';
import { UserlogComponent } from './userlog/userlog.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UsernavComponent } from './usernav/usernav.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { UserviewComponent } from './userview/userview.component';
const myrouter:Routes=[
  {
    path:"",
    component:AdminpageComponent
  },
  {
    path:"adminhome",
    component:AdminhomeComponent
  },
  {
    path:"userreg",
    component:UserregComponent
  },
  {
    path:"userlog",
    component:UserlogComponent
  },
  {
    path:"viewprofile",
    component:ViewprofileComponent
  },
  {
    path:"addcomplaint",
    component:AddComplaintComponent
  },
  {
    path:"userview",
    component:UserviewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    AdminhomeComponent,
    UserregComponent,
    UserlogComponent,
    ViewprofileComponent,
    AdminnavComponent,
    UsernavComponent,
    AddComplaintComponent,
    UserviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myrouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

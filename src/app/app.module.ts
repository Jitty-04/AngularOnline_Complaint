import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserregComponent } from './userreg/userreg.component';
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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    AdminhomeComponent,
    UserregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myrouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

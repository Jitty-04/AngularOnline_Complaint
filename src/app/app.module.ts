import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const myrouter:Routes=[
  {
    path:"",
    component:AdminpageComponent
  },
  {
    path:"adminhome",
    component:AdminhomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    AdminhomeComponent
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

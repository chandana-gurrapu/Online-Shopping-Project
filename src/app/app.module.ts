import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminsignoutComponent } from './adminsignout/adminsignout.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersignoutComponent } from './usersignout/usersignout.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    AdminloginComponent,
    UserloginComponent,
    LoginhomeComponent,
    AdmindashboardComponent,
    AdminusersComponent,
    AdminproductsComponent,
    AdminordersComponent,
    AdminsignoutComponent,
    AdminhomeComponent,
    UserhomeComponent,
    UserdashboardComponent,
    UsercartComponent,
    UserprofileComponent,
    UsersignoutComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
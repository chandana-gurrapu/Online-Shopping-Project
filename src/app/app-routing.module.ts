import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'register', component: RegisterComponent},
  // {path:'admin', component: AdminComponent},
  {path:'login',component: LoginComponent,
  children:[
    {path: '', redirectTo: 'loginhome', pathMatch:'full'},
    {path: 'loginhome', component:LoginhomeComponent},
    {path: 'userdashboard', component:UserdashboardComponent,
    children:[
      {path: '', redirectTo: 'userhome', pathMatch:'full'},
      {path: 'userhome', component:UserhomeComponent},
      {path: 'userprofile', component:UserprofileComponent},
      {path: 'usercart', component:UsercartComponent},
    ]
  },
    {path: 'admindashboard', component:AdmindashboardComponent,
    children:[
    {path: '', redirectTo: 'adminhome', pathMatch:'full'},
    {path: 'adminhome', component:AdminhomeComponent},
      {path: 'admin', component:AdminComponent},
      {path: 'adminproducts', component:AdminproductsComponent},
      {path: 'adminorders', component:AdminordersComponent},
    ]
  },
    {path: 'adminlogin', component:AdminloginComponent},
    {path: 'userlogin', component:UserloginComponent}
  ]
},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
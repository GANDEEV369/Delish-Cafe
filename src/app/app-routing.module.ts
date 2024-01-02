import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  // {path:'', component:LoginComponent}, 
  {path:'login', component:LoginComponent} ,
  {path:'register', component:RegisterComponent}
  // {path:'showcus', component:ShowemployeesComponent},  
  // {path:'cusbyid', component:ShowemployeebyidComponent}, 
  // {path:'products', component:ProductsComponent},
  // {path:'cart', component:CartComponent},
  // {path:'logout', component:LogoutComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { BookTableComponent } from './book-table/book-table.component';
import { OnlineOrderComponent } from './online-order/online-order.component';
import { PartiesComponent } from './parties/parties.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BrowseComponent } from './browse/browse.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
  {path:'login', component:LoginComponent} ,
  {path:'browse',component:BrowseComponent},
  {path:'register', component:RegisterComponent},
  {path:'', component:HomeComponent},
  {path:'book-table',component:BookTableComponent},
  {path:'cart', component:CartComponent},
  {path:'about', component:AboutusComponent},
  {path:'menu', component:MenuComponent},
  {path:'online-order',component:OnlineOrderComponent},
  {path:'parties',component:PartiesComponent},
  {path:'upcoming-events',component:UpcomingEventsComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'showcustomers', component:ShowcustomersComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

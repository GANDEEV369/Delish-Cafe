import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { GenderPipe } from './gender.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { UserService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { BookTableComponent } from './book-table/book-table.component';
import { OnlineOrderComponent } from './online-order/online-order.component';
import { PartiesComponent } from './parties/parties.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BrowseComponent } from './browse/browse.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventsComponent } from './events/events.component';

// import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShowcustomersComponent,
    GenderPipe,
    FooterComponent,
    CartComponent,
    MenuComponent,
    BookTableComponent,
    OnlineOrderComponent,
    PartiesComponent,
    UpcomingEventsComponent,
    ForgotpasswordComponent,
    AboutusComponent,
    EventsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  providers: [provideAnimations(), // required animations providers
  provideToastr(),UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

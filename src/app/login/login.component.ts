import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  cus: any;
  customer: any;
  branches: any;
  countries: any;
  showLoginModal = true;
  showRegisterModal = true;
  constructor(private router: Router, private service: UserService, private toastr: ToastrService) { 
       
  }
  ngOnInit(){
  }
  signup() {
    // jQuery('#register').modal('show');
    // this.showRegisterModal = true;
    this.router.navigate(['/register']);
  }

  async loginSubmit(loginForm: any) {
    this.cus = null;
    localStorage.setItem("emailId", loginForm.emailId);
    
  
    if(loginForm.emailId === "HR" && loginForm.password === "HR") {
      this.service.setLoginStatus();
      this.router.navigate(['showcustomers']);
    } else {
      
      await this.service.customerLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.cus = data;
      });

      if (this.cus != null) {        
        this.service.setLoginStatus();
        this.router.navigate(['home']);
        this.toastr.success('Login successful', 'Success');
      } else {
        // alert('Invalid Credentials'); normal alert message
        this.toastr.error('Invalid Credentials', 'Error');
      }
    }
  }
}

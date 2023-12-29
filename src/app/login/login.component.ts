import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  cus: any;
  constructor(private router: Router, private service: UserService) {    
  }
  ngOnInit(){
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
        this.router.navigate(['products']);
      } else {
        alert('Invalid Credentials');
      }
    }
  }
}

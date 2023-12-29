import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cus: any;
  customer:any;
  branches: any;
  countries: any;
  
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  constructor(private router: Router, private service: UserService) {  
    this.customer = {
      cusId: '',
      cusName: '', 
      gender: '',
      doj: '',
      country: '',
      emailId: '',
      password: '',      
      branch: {
        branchId: ''
      }
    }  
  }
  ngOnInit(){
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data;});
    this.service.getBranches().subscribe((data: any) => {this.branches = data;});
  }

  login() {
    // this.router.navigate(['/login']);
    jQuery('#login').modal('show'); 
  }
  signup() {
    // this.router.navigate(['/login']);
    jQuery('#register').modal('show'); 
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
  registerSubmit(regForm: any) {
    console.log(regForm);

    this.customer.cusId = regForm.cusId;
    this.customer.cusName = regForm.cusName;
    this.customer.gender = regForm.gender;
    this.customer.country = regForm.country;
    this.customer.doj = regForm.doj;
    this.customer.emailId = regForm.emailId;
    this.customer.password = regForm.password;
    this.customer.department.deptId = regForm.department;

    console.log(this.customer);

    this.service.registerCustomer(this.customer).subscribe((data: any) => {
      console.log(data);
    });
    
  }
}



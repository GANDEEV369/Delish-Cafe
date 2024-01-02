import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cus: any;
  customer: any;
  branches: any;
  countries: any;
  showLoginModal = true;
  showRegisterModal = true;
  
  // ... (other necessary properties)
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  constructor(private service: UserService , private router: Router) {
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
    };
  }

  ngOnInit() {
    // ... (initialize properties if needed)
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
    this.service.getBranches().subscribe((data: any) => { this.branches = data; });
  }
  login() {
    // jQuery('#login').modal('show');
    // this.showLoginModal = true;
    this.router.navigate(['/login']);

  }
  registerSubmit(regForm: any) {

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
      this.showRegisterModal = false;
    });
  }
}

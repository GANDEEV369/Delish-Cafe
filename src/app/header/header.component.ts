import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cus: any;
  customer: any;
  branches: any;
  countries: any;
  showLoginModal = false;
  showRegisterModal = false;

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  constructor(private router: Router, public service: UserService) {
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
    this.showLoginModal = false;
    this.showRegisterModal = false;
  }
  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
    this.service.getBranches().subscribe((data: any) => { this.branches = data; });
  }
  login() {
    // jQuery('#login').modal('show');
    this.showLoginModal = true;
    this.router.navigate(['/login']);

  }
  home(){
    this.router.navigate(['/']);
  }
  about(){
    this.router.navigate(['/about']);
  }
  contact(){
    this.router.navigate(['/contact']);
  }
  bookTable(){
    this.router.navigate(['/book-table']);
  }
  menu(){
    this.router.navigate(['/menu']);
  }
  onlineOrder(){
    this.router.navigate(['/online-order']);
  }
  cart(){
    this.router.navigate(['/cart']);
  }
  logout() {
    this.service.setLogoutStatus();
    
    this.router.navigate(['/']); // Redirect to home page after logout (adjust as needed)
  }
  parties(){
    this.router.navigate(['/parties']);
  }
  upcomingEvents(){
    this.router.navigate(['/upcoming-events']);
  }
  signup() {
    // jQuery('#register').modal('show');
    this.showRegisterModal = true;
    this.router.navigate(['/register']);
  }

  async loginSubmit(loginForm: any) {
    this.cus = null;
    localStorage.setItem('emailId', loginForm.emailId);

    if (loginForm.emailId === 'HR' && loginForm.password === 'HR') {
      this.service.setLoginStatus();
      this.router.navigate(['showcustomers']);
      this.showLoginModal = false;
    } else {
      await this.service.cusLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.cus = data;
      });

      if (this.cus != null) {
        this.service.setLoginStatus();
        this.router.navigate(['menu']);
        this.showLoginModal = false;
      } else {
        alert('Invalid Credentials');
      }
    }
  }

  registerSubmit(regForm: any) {

    this.customer.cusId = regForm.cusId;
    this.customer.cusName = regForm.cusName;
    this.customer.gender = regForm.gender;
    this.customer.country = regForm.country;
    this.customer.doj = regForm.doj;
    this.customer.emailId = regForm.emailId;
    this.customer.password = regForm.password;
    this.customer.branch.branchId = regForm.branch;

    console.log(this.customer);

    this.service.registerCustomer(this.customer).subscribe((data: any) => {
      console.log(data);
      this.showRegisterModal = false;
    });
  }
}



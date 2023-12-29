import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginStatus: any;

  constructor(private http: HttpClient) {
    this.loginStatus = false;
   }
  getUsers(): any {
    return this.http.get('http://localhost:8082/getUsers');
  }
  getCustomerById(cusId: any): any {
    return this.http.get('http://localhost:8082/getCustomerById/' + cusId);
  }
  getBranches(): any {
    return this.http.get('http://localhost:8082/getBranches');
  }
  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  registerCustomer(cus: any): any {
    return this.http.post('http://localhost:8082/addCustomer', cus);
  }
  customerLogin(emailId: any, password: any): any {
    return this.http.get('http://localhost:8082/customerLogin/' + emailId + '/' + password).toPromise();
  }
  deleteCustomer(cusId: any): any {
    return this.http.delete('http://localhost:8082/deleteCustomerById/' + cusId);
  }
  updateCustomer(cus: any): any {
    return this.http.put('http://localhost:8082/updateCustomer', cus);
  }

  setLoginStatus() {
    this.loginStatus = true;
  }
  getLoginStatus(): boolean {
    return this.loginStatus;
  }
  setLogoutStatus() {
    this.loginStatus = false;
  }
}

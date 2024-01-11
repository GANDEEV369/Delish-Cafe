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
    return this.http.get('http://localhost:8083/getCustomers');
  }
  getCustomerById(cusId: any): any {
    return this.http.get('http://localhost:8083/getCustomerById/' + cusId);
  }
  getBranches(): any {
    return this.http.get('http://localhost:8083/getBranches');
  }
  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  registerCustomer(cus: any): any {
    return this.http.post('http://localhost:8083/addCustomer', cus);
  }
  tableBooking(tab: any): any {
    return this.http.post('http://localhost:8083/addTableBooking', tab);
  }
  cusLogin(emailId: any, password: any): any {
    return this.http.get('http://localhost:8083/cusLogin/' + emailId + '/' + password).toPromise();
  }
  deleteCustomer(cusId: any): any {
    return this.http.delete('http://localhost:8083/deleteCustomerById/' + cusId);
  }
  updateCustomer(cus: any): any {
    return this.http.put('http://localhost:8083/updateCustomer', cus);
  }
  findByMobileNumber(phonumber:any): any{
    return this.http.get('http://localhost:8083/findByMobileNumber/'+ phonumber);
  }
  getAllCountriesCodes():any{
    return this.http.get("https://restcountries.com/v3.1/all");
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

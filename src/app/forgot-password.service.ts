import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  sendOtp(phonenumber: any): Observable<any> {
    return this.http.post('http://localhost:8083/forgot-password/send-otp', { phonenumber }, { responseType: 'text' });
  }

  verifyOtp(phonenumber: string, otp: any): Observable<any> {
    return this.http.post('http://localhost:8083/forgot-password/verify-otp', { phonenumber, otp }, { headers: { 'Content-Type': 'application/json' } });
  }

  updatePassword(phonenumber: string, newPassword: string): Observable<any> {
    const data = { phonenumber, newPassword };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:8083/forgot-password/reset-password', data, { headers });
  }

  getAllCountriesCodes():any{
    return this.http.get("https://restcountries.com/v3.1/all");
  }

}


import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent {
  bookTable: any;
  countries: any;
  branches: any;
  showBookTableModal = true;
  

  constructor(private formBuilder: FormBuilder, private service: UserService , private router: Router,private http: HttpClient) {
    this.bookTable = {
      cusId: '',
      cusName: '',
      gender: '',
      doj: '',
      country: '',
      countryCode:'',
      phonenumber: '',
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
  getAllCountriesCodes():any{
    return this.http.get("https://restcountries.com/v3.1/all");
  }
  bookTableSubmit(tabForm: any) {
    
    
    this.bookTable.cusName = tabForm.cusName;
    this.bookTable.country = tabForm.country;
    this.bookTable.dob = tabForm.dob;
    this.bookTable.startTime = tabForm.startTime;
    this.bookTable.endTime = tabForm.endTime;
    const phonenumber= tabForm.phonenumber;
    const countryCode= tabForm.countryCode;
    const fullPhoneNumber = countryCode + phonenumber;
    this.bookTable.phonenumber = fullPhoneNumber;
    this.bookTable.emailId = tabForm.emailId;
    this.bookTable.password = tabForm.password;
    this.bookTable.branch.branchId = tabForm.branch;
    this.bookTable.countryCode = tabForm.countryCode;
    console.log(this.bookTable);
    console.log(fullPhoneNumber);

    this.service.registerCustomer(this.bookTable).subscribe((data: any) => {
      console.log(data);
      alert("login successfully")
      // this.showRegisterModal = false;
    },
      (error: any) => {
        console.error('Error adding customer:', error);
        // Handle error (e.g., show an error message to the user)
      });
  }
}

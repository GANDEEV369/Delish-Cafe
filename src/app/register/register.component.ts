import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  protected aFormGroup!: FormGroup;
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

  constructor(private formBuilder: FormBuilder, private service: UserService , private router: Router,private http: HttpClient, private toastr: ToastrService) {

    this.customer = {

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
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

  }
  siteKey:string="6Lc61UwpAAAAAPXqaXo2l72_nvA1QvXiD4JU0gAX";
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
    // this.customer.phonenumber = regForm.phonenumber;
    const phonenumber= regForm.phonenumber;
    const countryCode= regForm.countryCode;
    const fullPhoneNumber = countryCode + phonenumber;
    // this.customer.countryCode = fullPhoneNumber;
     
    this.customer.phonenumber = fullPhoneNumber;
    this.customer.emailId = regForm.emailId;
    this.customer.password = regForm.password;
    this.customer.branch.branchId = regForm.branch;
    this.customer.countryCode = regForm.countryCode;
    console.log(this.customer);
    console.log(fullPhoneNumber);

    this.service.registerCustomer(this.customer).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/login']);
      this.toastr.success('You have successfully Registered', 'Success', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
        closeButton: true,
        progressBar: true
      });
      // alert("login successfully")
      // this.showRegisterModal = false;
    },
      (error: any) => {
        this.toastr.error('Something went wrong', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true
        });
        console.error('Error adding customer:', error);
        // Handle error (e.g., show an error message to the user)
      });
  }

  getAllCountriesCodes():any{
    return this.http.get("https://restcountries.com/v3.1/all");
  }
}

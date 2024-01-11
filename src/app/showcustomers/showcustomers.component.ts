import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var jQuery: any;
@Component({
  selector: 'app-showcustomers',
  templateUrl: './showcustomers.component.html',
  styleUrl: './showcustomers.component.css'
})

export class ShowcustomersComponent implements OnInit{
  customer: any;
  emailId: any;
  customers: any;
  branches: any;
  countries: any;

  //Dependency Injection for EmpService
  constructor(private service: UserService) {
    this.emailId = localStorage.getItem("emailId");

    //For 2-Way DataBinding, under Modal Dialog Box
    this.customer = {cusId:'',cusName:'',gender:'',doj:'',country:'',emailId:'',password:'',branch:{branchId:''},phonenumber:''};
  }

  ngOnInit() {
    this.service.getUsers().subscribe((data: any) => {this.customers= data;});
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data;});
    this.service.getAllCountriesCodes().subscribe((data: any) => {this.countries = data;});
    this.service.getBranches().subscribe((data: any) => {this.branches = data;});
  }


  editCustomer(cus: any) {
    this.customer = cus;
    console.log(this.customer);
    jQuery('#cusModal').modal('show');
  }

  updateCustomer() {
    console.log(this.customer);
    this.service.updateCustomer(this.customer).subscribe((data: any) => {console.log(data);});
  }

  deleteCustomer(cusId: any) {

    this.service.deleteCustomer(cusId).subscribe((data: any) => {
      console.log(data);
    });

    const i = this.customers.findIndex((element: any) => {
      return element.cusId == cusId;
    });
    this.customers.splice(i, 1);

    alert("Customer Deleted Successfully");
  }

}

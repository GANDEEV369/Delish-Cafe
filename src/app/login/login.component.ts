// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';
// import {ToastrService} from 'ngx-toastr';
// import { trigger, transition, useAnimation } from '@angular/animations';
// // import { flyInOut } from 'your-animation-library';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
//   animations: [
//     trigger('flyInOut', [
//       // Define your animation here
//     ]),
//   ]
// })
// export class LoginComponent implements OnInit{
//   cus: any;
//   customer: any;
//   branches: any;
//   countries: any;
//   showLoginModal = true;
//   showRegisterModal = true;
//   constructor(private router: Router, private service: UserService, private toastr: ToastrService) { 
       
//   }
//   ngOnInit(){
//   }
//   signup() {
//     // jQuery('#register').modal('show');
//     // this.showRegisterModal = true;
//     this.router.navigate(['/register']);
//   }

//   async loginSubmit(loginForm: any) {
//     this.cus = null;
//     localStorage.setItem("emailId", loginForm.emailId);
    
  
//     if(loginForm.emailId === "HR" && loginForm.password === "HR") {
//       this.service.setLoginStatus();
//       this.router.navigate(['showcustomers']);
//     } else {
      
//       await this.service.cusLogin(loginForm.emailId, loginForm.password).then((data: any) => {
//         console.log(data);
//         this.cus = data;
//       });

//       if (this.cus != null) {        
//         this.service.setLoginStatus();
//         this.router.navigate(['home']);
//         this.toastr.success('Login successful', 'Success');
//       } else {
//         // alert('Invalid Credentials'); normal alert message
//         this.toastr.error('Invalid Credentials', 'Error');
//       }
//     }
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';
// import { ToastrService } from 'ngx-toastr';
// import { trigger, transition, useAnimation } from '@angular/animations';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   animations: [
//     trigger('flyInOut', [
//       // Define your animation here
//     ]),
//   ]
// })
// export class LoginComponent implements OnInit {
//   cus: any;
//   customer: any;
//   branches: any;
//   countries: any;
//   showLoginModal = true;
//   showRegisterModal = true;

//   constructor(private router: Router, private service: UserService, private toastr: ToastrService) { }

//   ngOnInit() {
//   }

//   signup() {
//     this.router.navigate(['/register']);
//   }

//   async loginSubmit(loginForm: any) {
//     this.cus = null;
//     localStorage.setItem("emailId", loginForm.emailId);

//     if (loginForm.emailId === "HR" && loginForm.password === "HR") {
//       this.service.setLoginStatus();
//       this.router.navigate(['showcustomers']);
//     } else {
//       await this.service.cusLogin(loginForm.emailId, loginForm.password).then((data: any) => {
//         console.log(data);
//         this.cus = data;
//       });

//       if (this.cus != null) {
//         this.service.setLoginStatus();
//         this.router.navigate(['home']);
//         this.toastr.success('Login successful', 'Success', {
//           timeOut: 3000,
//           positionClass: 'toast-top-right',
//           closeButton: true,
//           progressBar: true
//         });
//       } else {
//         this.toastr.error('Invalid Credentials', 'Error', {
//           timeOut: 3000,
//           positionClass: 'toast-top-right',
//           closeButton: true,
//           progressBar: true
//         });
//       }
//     }
//   }
// }
declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
// import { MessageService } from 'primeng/api';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('flyInOut', [
      // Define your animation here
    ]),
  ]
})
export class LoginComponent implements OnInit {
  cus: any;
  customer: any;
  branches: any;
  countries: any;
  showLoginModal = true;
  showRegisterModal = true;

  constructor(private router: Router, private service: UserService, private toastr: ToastrService) { }

  ngOnInit():void {
    google.accounts.id.initialize({
      client_id :'52061201654-ngqi95sgq20borimte6ms62m5j55kr6b.apps.googleusercontent.com',
      callback: (resp: any)=>{
        console.log(resp);
      }
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:'filled_blue',
      size:'large',
      shape:'rectangle',
      width: 350
    })
  }
  private decodeToken (token: string){
    return JSON.parse(atob(token.split(".")[1]));

  }
  handleLogin(response: any){
    if(response){
      const payLoad = this.decodeToken(response.credentials);
      sessionStorage.setItem("loggedInUser",JSON.stringify(payLoad));
      this.router.navigate(['browse'])
    } 
  }

  signup() {
    this.router.navigate(['/register']);
  }
  forgotpassword(){
    this.router.navigate(['/forgotpassword']);
  }

  async loginSubmit(loginForm: any) {
    this.cus = null;
    localStorage.setItem("emailId", loginForm.emailId);

    if (loginForm.emailId === "admin@delish.com" && loginForm.password === "ADMIN") {
      this.service.setLoginStatus();
      this.router.navigate(['/showcustomers']);
    } else {
      await this.service.cusLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.cus = data;
      });

      if (this.cus != null) {
        this.service.setLoginStatus();
        this.router.navigate(['/']);
        this.toastr.success('You have successfully loggedin', 'Success', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true
        });
      } else {
        this.toastr.error('Invalid Credentials', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true
        });
      }
    }
  }
}

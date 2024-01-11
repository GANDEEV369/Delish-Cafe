import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../forgot-password.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  currentStep: 'sendOtp' | 'verifyOtp' | 'updatePassword' = 'sendOtp';
  countries: any;

  constructor(
    private fb: FormBuilder,
    private forgotPasswordService: ForgotPasswordService,
    private msgService: MessageService
    
    
  ) {
    this.forgotPasswordForm = this.fb.group({
      countryCode: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      otp: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required], // Add this line for the confirm password field
    }, { validators: this.passwordMatchValidator });

  }

  ngOnInit() {
    // Fetch country codes when the component initializes
    this.forgotPasswordService.getAllCountriesCodes().subscribe((data: any) => {
      this.countries = data;
    });
  }
  sendOtp() {
    const countryCodeControl = this.forgotPasswordForm.get('countryCode');
    const phonenumberControl = this.forgotPasswordForm.get('phonenumber');

    if (countryCodeControl && phonenumberControl) {
      const countryCode: string = countryCodeControl.value;
      const phonenumber: string = phonenumberControl.value;

      // Make sure countryCode includes the '+' sign
      const fullPhoneNumber = countryCode + phonenumber;

      console.log(fullPhoneNumber);

      this.forgotPasswordService.sendOtp(fullPhoneNumber).subscribe(
        (response) => {
          this.msgService.add({ severity: 'success', summary: ' ', detail: 'Login Successfull' });
          this.currentStep = 'verifyOtp';
        },
        (error) => {
          console.error('Error sending OTP:', error);
          this.handleError(error, 'Failed to send OTP');
        }
      );
    }
  }


  verifyOtp() {
    const countryCode = this.forgotPasswordForm.value.countryCode;
    const phonenumber = this.forgotPasswordForm.value.phonenumber;
    const otp = this.forgotPasswordForm.value.otp;

    const fullPhoneNumber = countryCode + phonenumber;

    this.forgotPasswordService.verifyOtp(fullPhoneNumber, otp).subscribe(
      () => {
        this.msgService.add({ severity: 'success', summary: 'Success', detail: 'OTP Verified Successfully' });
        this.currentStep = 'updatePassword';
      },
      (error) => {
        console.error('Error verifying OTP:', error);

        if (error.status === 401) {
          // Unauthorized access error
          this.handleError(error, 'Unauthorized access. Please verify your OTP and try again.');
        } else {
          this.handleError(error, 'Failed to verify OTP');
        }
      }
    );
  }


  updatePassword() {
    const countryCode = this.forgotPasswordForm.value.countryCode;
    const phonenumber = this.forgotPasswordForm.value.phonenumber;
    const newPassword = this.forgotPasswordForm.value.newPassword;

    const fullPhoneNumber = countryCode + phonenumber;
    const confirmPassword = this.forgotPasswordForm.value.confirmPassword;
    if (newPassword !== confirmPassword) {
         this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Password Do not Match!! ' });
      return;
    }

    this.forgotPasswordService.updatePassword(fullPhoneNumber, newPassword).subscribe(
      () => {
        this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Password updated Successfully . Login Now ' });
        
      },
      (error) => {
        console.error('Error updating password:', error);
        this.handleError(error, 'Failed to update password');
      }
    );
  }
  private passwordMatchValidator(formGroup: FormGroup) {
    const newPasswordControl = formGroup.get('newPassword');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (!newPasswordControl || !confirmPasswordControl) {
      return null;
    }

    if (newPasswordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }

    return null;
  }

  private handleError(error: any, defaultErrorMessage: string) {
    let errorMessage = defaultErrorMessage;

    if (error.status === 404) {
      errorMessage = 'User not found';
    } else if (error.status === 401) {
      errorMessage = 'Unauthorized access';
    } else if (error.error && error.error.message) {
      errorMessage = error.error.message;
    }

      this.msgService.add({ severity: 'success', summary: 'Success', detail: errorMessage });
  }
}


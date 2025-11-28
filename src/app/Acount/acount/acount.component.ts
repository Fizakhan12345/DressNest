import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../authService/api-service.service';

@Component({
  selector: 'app-acount',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './acount.component.html',
  styleUrl: './acount.component.scss'
})
export class AcountComponent {
 step = 1;
email = '';
otp = '';
password = '';
confirmPassword = '';
isLoading = false;
errorMessage = '';

constructor(private router: Router) {}

handleSubmit() {
  if (this.step === 1) {
    this.sendOtp();
  } else if (this.step === 2) {
    this.verifyOtp();
  } else if (this.step === 3) {
    this.savePassword();
  }
}

sendOtp() {
  this.isLoading = true;
  this.errorMessage = '';

  // API CALL — Simulated here
  setTimeout(() => {
    this.isLoading = false;
    this.step = 2; // Go to OTP screen
  }, 1500);
}

verifyOtp() {
  this.isLoading = true;
  this.errorMessage = '';

  // API CALL — Simulated here
  setTimeout(() => {
    this.isLoading = false;

    if (this.otp === '123456') {
      this.step = 3; // Move to password set screen
    } else {
      this.errorMessage = 'Invalid OTP. Try again.';
    }
  }, 1200);
}

savePassword() {
  this.errorMessage = '';

  if (this.password !== this.confirmPassword) {
    this.errorMessage = 'Passwords do not match!';
    return;
  }

  this.isLoading = true;

  setTimeout(() => {
    this.isLoading = false;
    this.router.navigate(['/home']);
  }, 1500);
}

}

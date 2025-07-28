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
  sentOtp = '123456'; // simulate OTP
  isLoading = false;
  errorMessage = '';

  constructor(private router: Router,
    private api:ApiServiceService
  ) {}

  async sendOtp() {
    console.log(this.email)
    try{
      const signupResult=await this.api.signUp(this.email);
      console.log(signupResult,"signupResult")
    }
    catch(err){

    }
    if (!this.email) {
      this.errorMessage = 'Please enter a valid email';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.step = 2;
      this.errorMessage = '';
    }, 1000);
  }

  verifyOtp() {
    if (this.otp === this.sentOtp) {
      this.router.navigate(['/orders']); // Route to your orders page
    } else {
      this.errorMessage = 'Invalid OTP';
    }
  }
}

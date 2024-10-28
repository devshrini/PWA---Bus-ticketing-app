import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})


export class AdminLoginComponent {
  adminUsername: string = '';
  adminPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  adminLogin() {
    // Sample admin credentials for demonstration
    const adminCredentials = {
      username: 'admin', // Use a predefined username
      password: 'admin123' // Use a predefined password
    };

    // Validate credentials
    if (this.adminUsername === adminCredentials.username && this.adminPassword === adminCredentials.password) {
      alert('Admin login successful!');
      this.router.navigate(['/admin-dashboard']); // Redirect to the admin dashboard or any other page
    } else {
      this.errorMessage = 'Invalid admin username or password';
    }
  }
}

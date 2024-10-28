import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IndexedDbService } from '../indexed-db.service';

interface User {
  username: string;
  email: string;
  phone: string;
  password: string;
}

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private indexedDbService: IndexedDbService, private router: Router) {}

  ngOnInit(): void {
    this.indexedDbService.initDB();
  }

  async signup() {
    const user: User = {
      username: this.username,
      email: this.email,
      phone: this.phone,
      password: this.password,
    };

    // Check if the user already exists
    const existingUser = await this.indexedDbService.getUser(this.username);
    if (existingUser) {
      this.errorMessage = 'Username already exists. Please choose another.';
      this.successMessage = '';
      return;
    }

    await this.indexedDbService.addUser(user);
    this.successMessage = 'Signup successful! You can now log in.';
    this.errorMessage = '';
    // Optionally redirect to login page after successful signup
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

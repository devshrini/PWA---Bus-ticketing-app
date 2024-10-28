import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IndexedDbService } from '../indexed-db.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private indexedDbService: IndexedDbService, private router: Router) {}

  ngOnInit(): void {
    this.indexedDbService.initDB();
  }

  async login() {
    const user = await this.indexedDbService.getUser(this.username);
    if (user && user.password === this.password) {
      alert('Login successful!');
      // Redirect to dashboard or any other page
      this.router.navigate(['/dashboard'])
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  // Sample function to add user (simulate sign-up)
  async addUser() {
    await this.indexedDbService.addUser({ username: this.username, password: this.password });
    alert('User added successfully!');
  }
}
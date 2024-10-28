import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell/app-shell.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppShellComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bus';
  loading = true;

  ngOnInit() {
    // Simulate content load delay for demonstration
    setTimeout(() => {
      this.loading = false;
    }, 3000); // Adjust this time based on actual load times or condition
  }
}

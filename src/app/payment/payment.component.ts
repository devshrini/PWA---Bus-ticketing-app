import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  bus: any;
  tickets: number = 1;
  totalCost: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { bus: any; tickets: number };
    this.bus = state?.bus;
    this.tickets = state?.tickets;
    this.totalCost = this.bus ? this.bus.cost * this.tickets : 0;
  }

  ngOnInit(): void {}

  proceedToPayment() {
    alert("Proceeding to payment...");
    // Future payment integration 
  }
}
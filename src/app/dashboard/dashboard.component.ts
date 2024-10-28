import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IndexedDbService } from '../indexed-db.service';
import { Bus } from '../bus.model';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  buses: Bus[] = [];

  constructor(private router: Router, private indexedDbService: IndexedDbService) {}

  async ngOnInit() {
    await this.loadBuses(); // Load buses from IndexedDB on component initialization
  }

  async loadBuses() {
    this.buses = await this.indexedDbService.getBuses();
  }

  bookNow(bus: Bus) {
    console.log('Booking bus:', bus);
    alert(`Booking started for ${bus.operatorName} - Bus No: ${bus.busNumber}`);
    // Navigate to bus detail page with bus number
    this.router.navigate(['/bus-detail', bus.busNumber]);
  }
}

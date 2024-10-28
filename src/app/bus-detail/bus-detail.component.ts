import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexedDbService } from '../indexed-db.service';
import { Bus } from '../bus.model'; // Make sure to import your Bus model

@Component({
  selector: 'app-bus-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css'], // Corrected from styleUrl to styleUrls
})
export class BusDetailComponent implements OnInit {
  bus: Bus | undefined; // Changed type to Bus
  ticketQuantity: number = 1;  // Default ticket quantity

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private indexedDbService: IndexedDbService // Inject IndexedDbService
  ) {}

  ngOnInit(): void {
    const busNo = this.route.snapshot.paramMap.get('busNo');
    this.loadBus(busNo); // Load bus data based on busNo
  }

  async loadBus(busNo: string | null) {
    if (busNo) {
      const buses: Bus[] = await this.indexedDbService.getBuses(); // Get all buses from IndexedDB
      this.bus = buses.find(b => b.busNumber === busNo); // Find the bus matching the bus number
    }
  }

  confirmBooking() {
    if (this.bus) {
      this.router.navigate(['/payment'], {
        state: {
          bus: this.bus,
          tickets: this.ticketQuantity
        }
      });
    }
  }
}

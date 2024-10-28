import { Component, OnInit } from '@angular/core';
import { IndexedDbService } from '../indexed-db.service';
import { Bus } from '../bus.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})


export class AdminDashboardComponent implements OnInit {
  buses: Bus[] = [];
  newBus: Bus = {
    operatorName: 'admin',
    busNumber: '',
    start: '',
    departure:'',
    destination: '',
    cost: 0,
    seatsAvailable: 0
  };

  constructor(private indexedDbService: IndexedDbService) {}

  ngOnInit() {
    this.loadBuses();
  }

  async loadBuses() {
    this.buses = await this.indexedDbService.getBuses(); // Load buses from IndexedDB
  }

  async addBus() {
    await this.indexedDbService.addBus(this.newBus);
    await this.loadBuses(); // Reload buses after adding
    this.resetNewBus();
  }

  resetNewBus() {
    this.newBus = {
      operatorName: '',
      busNumber: '',
      start: '',
      departure:'',
      destination: '',
      cost: 0,
      seatsAvailable: 0
    };
  }
}
import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';
import { Bus } from './bus.model';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})


export class IndexedDbService {
  private db: IDBPDatabase | undefined;

  async initDB() {
    this.db = await openDB('LoginDB', 1, {
      upgrade(db) {
        db.createObjectStore('users', { keyPath: 'username' });
        db.createObjectStore('buses', { keyPath: 'id', autoIncrement: true });
      }
    });
  }

  async addUser(user: User) {
    if (!this.db) await this.initDB();
    await this.db!.put('users', user);
  }

  async getUser(username: string): Promise<User | undefined> {
    if (!this.db) await this.initDB();
    return await this.db!.get('users', username);
  }
  async addBus(bus: Bus) {
    if (!this.db) await this.initDB();
    await this.db!.put('buses', bus); // Add bus details
  }

  async getBuses(): Promise<Bus[]> {
    if (!this.db) await this.initDB();
    return await this.db!.getAll('buses'); // Retrieve all buses
  }
}
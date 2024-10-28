export interface Bus {
    id?: number; // Optional for when adding a new bus
    operatorName: string;
    busNumber: string;
    start: string;
    departure:string; 


    destination: string;
    cost: number;
    seatsAvailable: number;
  }
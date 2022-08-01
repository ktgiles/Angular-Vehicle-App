import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>("http://localhost:9000/api/v1/vehicles");
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle>{
    return this.httpClient.post<Vehicle>("http://localhost:9000/api/v1/vehicles", vehicle);

  }
  updateVehicle(vehicle: Vehicle){
   return this.httpClient.put<Vehicle>("http://localhost:9000/api/v1/vehicles/" + vehicle.id, vehicle);
  }

  deleteVehicle(vehicle : Vehicle){
    console.log("vehicle delete service getting hit");
    return this.httpClient.delete<Vehicle>("http://localhost:9000/api/v1/vehicles/" + vehicle.id);
  }



  getVehicleById(){}
  
}

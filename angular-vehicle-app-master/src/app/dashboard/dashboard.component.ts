import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vehicle } from '../models/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

@Input()
export class DashboardComponent implements OnInit {

  vehicles : Vehicle[] = [];
  vehicle : Vehicle = new Vehicle();
  errorMessage : String = "";
  failure : String = "";

  constructor(private vehicleService : VehicleService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.vehicleService.getAllVehicles().subscribe({
      next:(vehicles)=>{
        this.vehicles = vehicles;
      }
    })
  }

  add(){
    if(this.vehicle.id != 0 && this.vehicle.make != "" && this.vehicle.model != "" && this.vehicle.year != 0){
      this.vehicleService.addVehicle(this.vehicle).subscribe({
        next:(vehicle)=>{
          this.vehicles.push(vehicle);
          this.errorMessage = "";
        },
        error:(errorResponse)=>{
          this.errorMessage = errorResponse.error;
        }
      });
      this.reset();
    }
    else{
      this.errorMessage = "Fields cannot be empty, year and id cannot be zero.";
    }

  }

  delete(vehicle : Vehicle){
    console.log("Delete method getting hit on id : " + vehicle.id)
    this.vehicleService.deleteVehicle(vehicle).subscribe({
      next: vehicle=>{
              },
      error: fail=> {
        let failure = "Vehicle with id: " + vehicle.id + " deleted."
        if (fail.error.text === failure){
          this.vehicles = this.vehicles.filter(v=>v.id != vehicle.id);
        } else {
        this.errorMessage = "Something isn't working."
        }
      }
    })
  }

  update(vehicle : Vehicle){
    let vehicleCopy = Object.assign({}, vehicle);
    this.dialog.open(UpdateComponent,{
      width:"250px",
      data:vehicleCopy
    }).afterClosed().subscribe(()=>{
      this.ngOnInit();
    });
  }

  reset(){
    this.vehicle.id = 0;
    this.vehicle.make = "";
    this.vehicle.model = "";
    this.vehicle.year = 0;
    this.errorMessage = "";
  }
}

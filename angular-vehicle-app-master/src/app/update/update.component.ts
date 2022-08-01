import { Version } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehicle } from '../models/Vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  errorMessage: string = "";
  
  constructor(@Inject(MAT_DIALOG_DATA) private data : any, private vehicleService: VehicleService, private dialogRef : MatDialogRef<UpdateComponent>) { }
  
  vehicle: Vehicle = this.data;
  
  ngOnInit(): void {
  }

  update(){
    this.vehicleService.updateVehicle(this.vehicle).subscribe({
      next:()=>{
      this.dialogRef.close();
      }
    });
  }

  cancel(){
    this.dialogRef.close();
  }

}

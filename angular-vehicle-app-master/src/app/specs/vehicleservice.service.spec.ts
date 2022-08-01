import { TestBed } from '@angular/core/testing';

import { VehicleService } from '../services/vehicle.service';

describe('VehicleserviceService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

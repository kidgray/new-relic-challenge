import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

import { CustomersService } from './customers.service';
import { of } from "rxjs";

describe('CustomersService', () => {
  let service: CustomersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCustomers', () => {
    it('should return a list of customers', () => {

      service.getCustomers();

      const req = httpTestingController.expectOne('http://localhost:3000');
      // expect()
    })
  })
});

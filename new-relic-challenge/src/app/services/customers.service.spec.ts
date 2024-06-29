import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { CustomersService } from './customers.service';
import { Customer } from "../interfaces/customer.interfaces";

describe('CustomersService', () => {
  let service: CustomersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCustomers', () => {
    it('should return a list of customers', () => {
      let customers: Customer[] | undefined;
      service.getCustomers()
        .subscribe((response: Customer[]) => {
          customers = response;
        })

      const req = httpTestingController.expectOne('http://localhost:3000');
      req.flush([{ id: 1, first_name: 'Test', last_name: 'Testing', company: 'Test Inc.'}]);
      expect(customers).toEqual([{ id: 1, first_name: 'Test', last_name: 'Testing', company: 'Test Inc.'}]);
    });
  });

  describe('getCustomersByName', () => {
    it('should return customer(s) based on first name provided', () => {
      let customers: Customer[] | undefined;
      service.getCustomersByName('Test')
        .subscribe((response: Customer[]) => {
          customers = response;
        });

      const req = httpTestingController.expectOne('http://localhost:3000/?search=Test');
      req.flush([{ id: 1, first_name: 'Test', last_name: 'Testing', company: 'Test Inc.'}]);
      expect(customers).toEqual([{ id: 1, first_name: 'Test', last_name: 'Testing', company: 'Test Inc.'}]);
    });
  });

  describe('filterCustomersByCompany', () => {
    it('should return customer(s) based on company name provided', () => {
      let customers: Customer[] | undefined;
      service.filterCustomersByCompany('Test Inc.')
        .subscribe((response: Customer[]) => {
          customers = response;
        });

      const req = httpTestingController.expectOne('http://localhost:3000/?filter_by_company_name=Test Inc.');
      req.flush([{ id: 1, first_name: 'Test', last_name: 'Testing', company: 'Test Inc.'}]);
      expect(customers).toEqual([{ id: 1, first_name: 'Test', last_name: 'Testing', company: 'Test Inc.'}]);
    });
  });
});

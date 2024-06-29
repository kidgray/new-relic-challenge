import { Injectable } from '@angular/core';
import { Subject, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Customer } from "../interfaces/customer.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customersSubject: Subject<Customer[]> = new Subject<Customer[]>();

  constructor(private http: HttpClient) { }

  getCustomers(): Subscription {
    return this.http.get<Customer[]>('http://localhost:3000')
      .subscribe((customers: Customer[]) => {
        this.customersSubject.next(customers);
      })
  }

  getCustomersByName(name: string): Subscription {
    return this.http.get<Customer[]>(`http://localhost:3000/?search=${name}`)
      .subscribe((customers: Customer[]) => {
        this.customersSubject.next(customers);
      })
  }

  filterCustomersByCompany(companyName: string): Subscription {
    return this.http.get<Customer[]>(`http://localhost:3000/?filter_by_company_name=${companyName}`)
      .subscribe((customers: Customer[]) => {
        this.customersSubject.next(customers);
      })
  }
}

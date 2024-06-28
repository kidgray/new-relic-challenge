import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Customer } from "../interfaces/customer.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customersSubject: Subject<Customer[]> = new Subject<Customer[]>();

  constructor(private http: HttpClient) { }

  getCustomers(): void {
    this.http.get<Customer[]>('http://localhost:3000')
      .subscribe((customers: Customer[]) => {
        this.customersSubject.next(customers);
      })
  }

  getCustomersByName(name: string): void {
    this.http.get<Customer[]>(`http://localhost:3000/?search=${name}`)
      .subscribe((customers: Customer[]) => {
        // this.customersSubject.next(customers);
      })
  }

  searchByName(customers: Customer[], name: string): void {
    let filteredCustomers: Customer[] = [];

    if (name.length > 0) {
      // Note: assignment specs say that either the first name OR the last
      // name should "match" the input string - I am assuming this means
      // an exact match
      filteredCustomers = customers.filter((customer: Customer) => {
        return customer.first_name.toLowerCase() === name.toLowerCase()
          || customer.last_name.toLowerCase() === name.toLowerCase();
      });
    } else {
      // If no search term is specified, just return all the customers
      this.getCustomers();
    }

    if (filteredCustomers.length > 0) {
      this.customersSubject.next(filteredCustomers);
    }
  }
}

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
        this.customersSubject.next(customers);
      })
  }

  searchByName(customers: Customer[], name: string): void {
    this.getCustomersByName(name);
  }
}

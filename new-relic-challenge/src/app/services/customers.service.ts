import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Customer } from "../interfaces/customer.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customersSubject: Subject<Customer[]> = new Subject<Customer[]>();

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000');
  }

  getCustomersByName(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`http://localhost:3000/?search=${name}`);
  }

  filterCustomersByCompany(companyName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`http://localhost:3000/?filter_by_company_name=${companyName}`);
  }
}

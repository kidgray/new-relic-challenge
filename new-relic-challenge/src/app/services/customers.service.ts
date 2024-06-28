import { Injectable } from '@angular/core';
import {Customer} from "../interfaces/customer.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customersTest: Customer[] = [
    { id: 1, firstName: 'test', lastName: 'test', company: 'test'},
    { id: 2, firstName: 'hi', lastName: 'hi', company: 'hi'},
    { id: 3, firstName: 'hello', lastName: 'hello', company: 'hello'}
  ];
  constructor() { }
}

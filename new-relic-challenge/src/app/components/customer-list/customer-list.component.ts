import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';

import { Customer } from "../../interfaces/customer.interfaces";
import { CustomersService } from "../../services/customers.service";
import { CustomerSearchBarComponent } from './components/customer-search-bar/customer-search-bar.component';
import { CustomerCompanyFilterDropdownComponent } from "./components/customer-company-filter-dropdown/customer-company-filter-dropdown.component";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    CustomerSearchBarComponent,
    CustomerCompanyFilterDropdownComponent
  ],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[];
  customerCompanies: string[];
  customersSubscription: Subscription;
  queryParamsSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.customersSubscription = this.customersService.customersSubject
      .subscribe((customers: Customer[]) => {
        this.customers = customers;
        this.customerCompanies = customers.map((customer: Customer) => customer.company);

        // Since we are using the OnPush change detection strategy for optimization purposes,
        // we need to tell Angular to check for changes after updating non-Input/Output variables
        this.cdr.detectChanges();
      });

    this.queryParamsSubscription = this.activatedRoute.queryParams
      .subscribe((params: Params) => {
        if (params['search']) {
          this.customersService.getCustomersByName(params['search']);
        } else if (params['filter_by_company_name']) {
          this.customersService.filterCustomersByCompany(params['filter_by_company_name']);
        } else {
          this.customersService.getCustomers();
        }
      });
  }

  ngOnDestroy(): void {
    // It's important to unsubscribe from observables when destroying components
    // in order to avoid memory leaks
    this.customersSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

  searchByName(name: string): void {
    this.customersService.getCustomersByName(name);
  }

  filterByCompany(companyName: string): void {
    this.customersService.filterCustomersByCompany(companyName);
  }
}

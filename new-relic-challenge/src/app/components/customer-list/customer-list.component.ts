import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';

import { Customer } from "../../interfaces/customer.interfaces";
import { CustomersService } from "../../services/customers.service";
import { CustomerSearchBarComponent } from './components/customer-search-bar/customer-search-bar.component';
@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    CustomerSearchBarComponent
  ],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnDestroy {
  customers: Customer[];

  queryParamsSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService
  ) {
    this.customers = this.customersService.customersTest;

    this.queryParamsSubscription = this.activatedRoute.queryParams
      .subscribe((params: Params) => {
        if (params['search']) {
          this.searchByName(params['search']);
        }
      });
  }

  ngOnDestroy(): void {
    // It's important to unsubscribe from observables when destroying components
    // in order to avoid memory leaks
    this.queryParamsSubscription.unsubscribe();
  }

  searchByName(name: string): void {
    if (name.length > 0) {
      this.customers = this.customersService.customersTest.filter((customer: Customer) => {
        return customer.firstName.toLowerCase() === name.toLowerCase()
          || customer.lastName.toLowerCase() === name.toLowerCase();
      });
    } else {
      this.customers = this.customersService.customersTest;
    }
  }
}

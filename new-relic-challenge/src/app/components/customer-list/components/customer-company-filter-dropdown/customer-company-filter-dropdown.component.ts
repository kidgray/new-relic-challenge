import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params, RouterModule } from "@angular/router";

import { ALL_COMPANIES } from "../../../../constants/constants";

@Component({
  selector: 'app-customer-company-filter-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './customer-company-filter-dropdown.component.html',
  styleUrls: ['./customer-company-filter-dropdown.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCompanyFilterDropdownComponent implements OnInit, OnDestroy {

  @Input() customerCompanies: string[] = [];
  @Output() companyToFilterOn: EventEmitter<string> = new EventEmitter<string>();
  allCompanies: string = ALL_COMPANIES;
  selectedCompany: string;

  // Same idea as the customer search bar - we will use the query param
  // value to initialize the dropdown bar's default value
  queryParams: Params;
  queryParamsSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.activatedRoute.queryParams
      .subscribe((params: Params) => {
        this.queryParams = params;
        this.selectedCompany = this.queryParams['filter_by_company_name'] ?? this.allCompanies;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  onCompanySelected(company: string): void {
    let newUrl: string;
    this.selectedCompany = company;

    if (company !== ALL_COMPANIES) {
      newUrl = window.location.origin + `?filter_by_company_name=${company}`
      this.companyToFilterOn.emit(this.selectedCompany);
    } else {
      newUrl = window.location.origin;
      this.companyToFilterOn.emit('');
    }

    // Repeating this pattern from the customer search bar
    window.history.replaceState({}, '', newUrl);
  }
}

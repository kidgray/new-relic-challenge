import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ALL_COMPANIES } from "../../../../constants/constants";

@Component({
  selector: 'app-customer-company-filter-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './customer-company-filter-dropdown.component.html',
  styleUrls: ['./customer-company-filter-dropdown.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCompanyFilterDropdownComponent {

  @Input() customerCompanies: string[] = [];
  @Output() companyToFilterOn: EventEmitter<string> = new EventEmitter<string>();
  allCompanies: string = ALL_COMPANIES;
  selectedCompany: string;

  constructor() {

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

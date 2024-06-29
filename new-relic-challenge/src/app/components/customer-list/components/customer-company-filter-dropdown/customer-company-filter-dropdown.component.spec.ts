import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { CustomerCompanyFilterDropdownComponent } from './customer-company-filter-dropdown.component';

describe('CustomerCompanyFilterDropdownComponent', () => {
  let component: CustomerCompanyFilterDropdownComponent;
  let fixture: ComponentFixture<CustomerCompanyFilterDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerCompanyFilterDropdownComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CustomerCompanyFilterDropdownComponent);
      component = fixture.componentInstance;

      // Add test customer companies
      component.customerCompanies = [
        'Company 1'
      ];

      fixture.detectChanges();
    });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a dropdown option whose default selected value is "All Companies"', () => {
    const selectContainer = fixture.debugElement.query(
      By.css('[data-testid="filter-by-company-dropdown"]')
    ).nativeElement;
    const allCompaniesDropdownElement = selectContainer.querySelector('.all-companies-dropdown-option');

    expect(allCompaniesDropdownElement.textContent.trim()).toBe("All Companies");
    expect(allCompaniesDropdownElement).toHaveProperty('selected');
  });

  it('should populate the dropdown with company names', () => {
    const companyOne = fixture.debugElement.nativeElement.querySelector('.company-dropdown-option-0');

    expect(companyOne.textContent.trim()).toBe('Company 1');
  });

  it('should call onCompanySelected when a select option is clicked', () => {
    const onCompanySelectedSpy = jest.spyOn(component, 'onCompanySelected');
    const selectContainer = fixture.debugElement.query(
      By.css('[data-testid="filter-by-company-dropdown"]')
    ).nativeElement;

    // Mimic the functionality of clicking on the option
    selectContainer.value = selectContainer.options[1].value;
    selectContainer.dispatchEvent(new Event('ngModelChange'));
    fixture.detectChanges();

    expect(onCompanySelectedSpy).toBeCalledTimes(1);
  })
});

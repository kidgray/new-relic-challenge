import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCompanyFilterDropdownComponent } from './customer-company-filter-dropdown.component';

describe('CustomerCompanyFilterDropdownComponent', () => {
  let component: CustomerCompanyFilterDropdownComponent;
  let fixture: ComponentFixture<CustomerCompanyFilterDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerCompanyFilterDropdownComponent]
    });
    fixture = TestBed.createComponent(CustomerCompanyFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchBarComponent } from './customer-search-bar.component';

describe('CustomerSearchBarComponent', () => {
  let component: CustomerSearchBarComponent;
  let fixture: ComponentFixture<CustomerSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerSearchBarComponent]
    });
    fixture = TestBed.createComponent(CustomerSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

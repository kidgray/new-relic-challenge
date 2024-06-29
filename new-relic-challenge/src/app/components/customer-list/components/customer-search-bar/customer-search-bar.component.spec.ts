import { ActivatedRoute } from "@angular/router";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { CustomerSearchBarComponent } from './customer-search-bar.component';
import { By } from "@angular/platform-browser";

describe('CustomerSearchBarComponent', () => {
  let component: CustomerSearchBarComponent;
  let fixture: ComponentFixture<CustomerSearchBarComponent>;

  let activatedRouteMock: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerSearchBarComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(CustomerSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    activatedRouteMock = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInputText when text is entered', () => {
    const onInputTextSpy = jest.spyOn(component, 'onInputText')
    const inputContainer = fixture.debugElement.query(
      By.css('[data-testid="customer-search-bar-input"]')
    ).nativeElement;

    expect(inputContainer.value).toBe('');

    inputContainer.value = 'Test';
    inputContainer.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputContainer.value).toBe('Test');
    expect(onInputTextSpy).toBeCalledTimes(1);
  });
});

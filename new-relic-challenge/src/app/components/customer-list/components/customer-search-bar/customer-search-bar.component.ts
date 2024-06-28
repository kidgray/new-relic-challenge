import { ChangeDetectionStrategy, Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-customer-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './customer-search-bar.component.html',
  styleUrls: ['./customer-search-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerSearchBarComponent implements OnDestroy {

  @Output() nameToSearchFor: EventEmitter<string> = new EventEmitter<string>();
  @Output() urlToSearchFor: EventEmitter<string> = new EventEmitter<string>();

  // We will need the query params to initialize the value of the search bar
  // when we have an active search term
  queryParams: Params;
  queryParamsSubscription: Subscription;
  // Why only a FormControl and not a FormGroup? Because we only need
  // to keep track of one control - the name field
  // name: FormControl<string | null> = new FormControl(this.queryParams['search']);
  name: FormControl<string | null>;
  constructor(private activatedRoute: ActivatedRoute) {
    this.queryParamsSubscription = this.activatedRoute.queryParams
      .subscribe((queryParams: Params) => {
        this.queryParams = queryParams;

        // Initialize the form name to the value of the query params, if one exists
        // Otherwise, initialize to the empty string
        this.name = new FormControl(this.queryParams['search'] ?? '');
      })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  onInputText(): void {
    // NOTE: Handling the URL this way is cumbersome. I am only doing it because
    // the exercise specs specify that searching should happen AS YOU TYPE into the search bar,
    // i.e. no submit or enter button click is expected, although a button is how I would normally do it
    let newUrl: string;

    // We emit the empty string when name is empty so that we can
    // reload the entire array in the customer list
    if (this.name.value) {
      newUrl = window.location.origin + `?search=${this.name.value}`;
      this.nameToSearchFor.emit(this.name.value);
    } else {
      newUrl = window.location.origin;
      this.nameToSearchFor.emit('');
    }

    // Replaces the URL without refreshing the page - again, this is
    // somewhat cumbersome/messy
    window.history.replaceState({}, '', newUrl);
  }
}

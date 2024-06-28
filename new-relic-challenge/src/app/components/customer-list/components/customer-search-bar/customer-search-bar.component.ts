import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";


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
export class CustomerSearchBarComponent {

  @Output() nameToSearchFor: EventEmitter<string> = new EventEmitter<string>();
  @Output() urlToSearchFor: EventEmitter<string> = new EventEmitter<string>();
  // Why only a FormControl and not a FormGroup? Because we only need
  // to keep track of one control - the name field
  name: FormControl<string | null> = new FormControl('');

  constructor() {

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

    window.history.replaceState({}, '', newUrl);
  }
}

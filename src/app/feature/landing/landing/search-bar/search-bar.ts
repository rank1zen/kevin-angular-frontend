import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ZardInputDirective } from '@/shared/components/input';
import { form, FormField } from '@angular/forms/signals';
import { LandingService } from '@/feature/landing/landing-service';
import { ZardCardComponent } from '@/shared/components/card';

@Component({
  selector: 'app-search-bar',
  imports: [
    ZardInputDirective,
    ReactiveFormsModule,
    FormField,
    ZardCardComponent
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  formData = signal('');

  readonly form = form(this.formData);

  landingService = inject(LandingService);

  searchResults = signal({})

  formIsFocused = signal(false);

  onSubmit() {
    const results = this.landingService.getSearchResults(this.formData())
    this.searchResults.set(results)
  }

  shouldShowResults() {
    return this.formData().length > 2 && this.formIsFocused();
  }
}

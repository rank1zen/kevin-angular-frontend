import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { SearchResultListModel } from '@/feature/landing/landing-service';

@Component({
  selector: 'app-search-bar-entry',
  imports: [],
  templateUrl: './search-bar-entry.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './search-bar-entry.css',
})
export class SearchBarEntry {
  searchBarEntryModel = input.required<SearchResultListModel>();
}

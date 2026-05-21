import { Component, input } from '@angular/core';
import { SearchResultListModel } from '@/feature/landing/landing-service';

@Component({
  selector: 'app-search-bar-entry',
  imports: [],
  templateUrl: './search-bar-entry.html',
  styleUrl: './search-bar-entry.css',
})
export class SearchBarEntry {
  searchBarEntryModel = input.required<SearchResultListModel>();
}

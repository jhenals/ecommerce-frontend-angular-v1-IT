import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.css']
})
export class FilterSortComponent {
  @Output() filterChanged = new EventEmitter<number[]>();
  @Output() sortChanged = new EventEmitter<string>();


  filterOptions: Category[] = [];
  selectedFilters: number[] = [];
  selectedSort: string = 'default';

  constructor(
    private bookService: BookService
  ) {
    this.getAllCategories();
  }

  private getAllCategories() {
    this.bookService.getAllCategories().subscribe((data) => {
      this.filterOptions = data;
    }
    );
  }


  updateSort() {
    this.sortChanged.emit(this.selectedSort);
  }

  updateFilters() {
    this.filterChanged.emit(this.selectedFilters.map((filter) => filter));
    this.selectedFilters = [];
  }

  handleCheckboxChange(filter: Category, isChecked: boolean) {
    if (isChecked) {
      this.selectedFilters.push(filter.id);
    } else {
      const index = this.selectedFilters.indexOf(filter.id);
      if (index > -1) {
        this.selectedFilters.splice(index, 1);
      }
    }
  }


}

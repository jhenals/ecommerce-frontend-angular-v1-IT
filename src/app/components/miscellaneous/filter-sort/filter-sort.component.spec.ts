import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSortComponent } from './filter-sort.component';

describe('FilterSortComponent', () => {
  let component: FilterSortComponent;
  let fixture: ComponentFixture<FilterSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSortComponent]
    });
    fixture = TestBed.createComponent(FilterSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

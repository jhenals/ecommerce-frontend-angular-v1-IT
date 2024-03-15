import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookComponent } from './add-new-book.component';

describe('AddNewBookComponent', () => {
  let component: AddNewBookComponent;
  let fixture: ComponentFixture<AddNewBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewBookComponent]
    });
    fixture = TestBed.createComponent(AddNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

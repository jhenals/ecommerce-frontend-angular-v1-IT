import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserOrdersComponent } from './manage-user-orders.component';

describe('ManageUserOrdersComponent', () => {
  let component: ManageUserOrdersComponent;
  let fixture: ComponentFixture<ManageUserOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageUserOrdersComponent]
    });
    fixture = TestBed.createComponent(ManageUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

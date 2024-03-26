import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderStatusComponent } from './update-order-status.component';

describe('UpdateOrderStatusComponent', () => {
  let component: UpdateOrderStatusComponent;
  let fixture: ComponentFixture<UpdateOrderStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrderStatusComponent]
    });
    fixture = TestBed.createComponent(UpdateOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
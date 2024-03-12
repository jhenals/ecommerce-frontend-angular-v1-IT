import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialoffersComponent } from './specialoffers.component';

describe('SpecialoffersComponent', () => {
  let component: SpecialoffersComponent;
  let fixture: ComponentFixture<SpecialoffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialoffersComponent]
    });
    fixture = TestBed.createComponent(SpecialoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

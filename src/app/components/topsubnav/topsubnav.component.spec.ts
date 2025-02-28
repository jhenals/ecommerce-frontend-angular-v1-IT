import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsubnavComponent } from './topsubnav.component';

describe('TopsubnavComponent', () => {
  let component: TopsubnavComponent;
  let fixture: ComponentFixture<TopsubnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopsubnavComponent]
    });
    fixture = TestBed.createComponent(TopsubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

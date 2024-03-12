import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBannerComponent } from './homepage-banner.component';

describe('HomepageBannerComponent', () => {
  let component: HomepageBannerComponent;
  let fixture: ComponentFixture<HomepageBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageBannerComponent]
    });
    fixture = TestBed.createComponent(HomepageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

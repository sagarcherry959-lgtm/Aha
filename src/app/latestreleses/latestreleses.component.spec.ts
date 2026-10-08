import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestrelesesComponent } from './latestreleses.component';

describe('LatestrelesesComponent', () => {
  let component: LatestrelesesComponent;
  let fixture: ComponentFixture<LatestrelesesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestrelesesComponent]
    });
    fixture = TestBed.createComponent(LatestrelesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

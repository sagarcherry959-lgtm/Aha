import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovedairiesComponent } from './lovedairies.component';

describe('LovedairiesComponent', () => {
  let component: LovedairiesComponent;
  let fixture: ComponentFixture<LovedairiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LovedairiesComponent]
    });
    fixture = TestBed.createComponent(LovedairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

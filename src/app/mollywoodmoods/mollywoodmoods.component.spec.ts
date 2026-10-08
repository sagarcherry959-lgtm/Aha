import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MollywoodmoodsComponent } from './mollywoodmoods.component';

describe('MollywoodmoodsComponent', () => {
  let component: MollywoodmoodsComponent;
  let fixture: ComponentFixture<MollywoodmoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MollywoodmoodsComponent]
    });
    fixture = TestBed.createComponent(MollywoodmoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

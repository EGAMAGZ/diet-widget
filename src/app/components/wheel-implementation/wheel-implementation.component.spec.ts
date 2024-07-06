import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelImplementationComponent } from './wheel-implementation.component';

describe('WheelImplementationComponent', () => {
  let component: WheelImplementationComponent;
  let fixture: ComponentFixture<WheelImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheelImplementationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

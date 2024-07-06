import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriasDiariasComponent } from './calorias-diarias.component';

describe('CaloriasDiariasComponent', () => {
  let component: CaloriasDiariasComponent;
  let fixture: ComponentFixture<CaloriasDiariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriasDiariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriasDiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialSampleComponent } from './initial-sample.component';

describe('InitialSampleComponent', () => {
  let component: InitialSampleComponent;
  let fixture: ComponentFixture<InitialSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

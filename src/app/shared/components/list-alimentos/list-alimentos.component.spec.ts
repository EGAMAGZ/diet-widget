import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlimentosComponent } from './list-alimentos.component';

describe('ListAlimentosComponent', () => {
  let component: ListAlimentosComponent;
  let fixture: ComponentFixture<ListAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAlimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

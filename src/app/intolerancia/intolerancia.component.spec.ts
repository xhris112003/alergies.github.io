import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoleranciaComponent } from './intolerancia.component';

describe('IntoleranciaComponent', () => {
  let component: IntoleranciaComponent;
  let fixture: ComponentFixture<IntoleranciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntoleranciaComponent]
    });
    fixture = TestBed.createComponent(IntoleranciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

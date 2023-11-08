import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevencionsComponent } from './prevencions.component';

describe('PrevencionsComponent', () => {
  let component: PrevencionsComponent;
  let fixture: ComponentFixture<PrevencionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevencionsComponent]
    });
    fixture = TestBed.createComponent(PrevencionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

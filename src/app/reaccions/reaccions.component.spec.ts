import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaccionsComponent } from './reaccions.component';

describe('ReaccionsComponent', () => {
  let component: ReaccionsComponent;
  let fixture: ComponentFixture<ReaccionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReaccionsComponent]
    });
    fixture = TestBed.createComponent(ReaccionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

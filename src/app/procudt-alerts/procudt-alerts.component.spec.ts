import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcudtAlertsComponent } from './procudt-alerts.component';

describe('ProcudtAlertsComponent', () => {
  let component: ProcudtAlertsComponent;
  let fixture: ComponentFixture<ProcudtAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcudtAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcudtAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

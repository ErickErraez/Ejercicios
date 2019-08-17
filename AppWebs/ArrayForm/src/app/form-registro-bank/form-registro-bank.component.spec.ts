import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroBankComponent } from './form-registro-bank.component';

describe('FormRegistroBankComponent', () => {
  let component: FormRegistroBankComponent;
  let fixture: ComponentFixture<FormRegistroBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistroBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

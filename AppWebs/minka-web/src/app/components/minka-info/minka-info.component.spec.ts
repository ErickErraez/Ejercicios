import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinkaInfoComponent } from './minka-info.component';

describe('MinkaInfoComponent', () => {
  let component: MinkaInfoComponent;
  let fixture: ComponentFixture<MinkaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinkaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinkaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

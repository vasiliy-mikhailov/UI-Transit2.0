import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso20022ListComponent } from './iso20022-list.component';

describe('Iso20022ListComponent', () => {
  let component: Iso20022ListComponent;
  let fixture: ComponentFixture<Iso20022ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso20022ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso20022ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

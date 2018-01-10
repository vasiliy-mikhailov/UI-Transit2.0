import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso20022ViewComponent } from './iso20022-view.component';

describe('Iso20022ViewComponent', () => {
  let component: Iso20022ViewComponent;
  let fixture: ComponentFixture<Iso20022ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso20022ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso20022ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

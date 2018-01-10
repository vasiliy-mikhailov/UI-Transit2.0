import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeFormatViewComponent } from './free-format-view.component';

describe('FreeFormatViewComponent', () => {
  let component: FreeFormatViewComponent;
  let fixture: ComponentFixture<FreeFormatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeFormatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeFormatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

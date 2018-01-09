import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeFormatListComponent } from './free-format-list.component';

describe('FreeFormatListComponent', () => {
  let component: FreeFormatListComponent;
  let fixture: ComponentFixture<FreeFormatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeFormatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeFormatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

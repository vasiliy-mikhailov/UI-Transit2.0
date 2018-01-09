import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFolderComponent } from './in-folder.component';

describe('InFolderComponent', () => {
  let component: InFolderComponent;
  let fixture: ComponentFixture<InFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

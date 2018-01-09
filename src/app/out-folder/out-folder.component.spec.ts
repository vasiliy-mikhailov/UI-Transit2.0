import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutFolderComponent } from './out-folder.component';

describe('OutFolderComponent', () => {
  let component: OutFolderComponent;
  let fixture: ComponentFixture<OutFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

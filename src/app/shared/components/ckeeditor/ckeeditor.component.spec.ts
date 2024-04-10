import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeeditorComponent } from './ckeeditor.component';

describe('CkeeditorComponent', () => {
  let component: CkeeditorComponent;
  let fixture: ComponentFixture<CkeeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkeeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

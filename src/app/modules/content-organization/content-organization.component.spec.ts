import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOrganizationComponent } from './content-organization.component';

describe('ContentOrganizationComponent', () => {
  let component: ContentOrganizationComponent;
  let fixture: ComponentFixture<ContentOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

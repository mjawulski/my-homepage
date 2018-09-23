import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAndConferencesComponent } from './projects-and-conferences.component';

describe('ProjectsAndConferencesComponent', () => {
  let component: ProjectsAndConferencesComponent;
  let fixture: ComponentFixture<ProjectsAndConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAndConferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAndConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

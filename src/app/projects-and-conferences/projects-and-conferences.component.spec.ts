import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAndConferencesComponent } from './projects-and-conferences.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProjectsAndConferencesComponent', () => {
  let component: ProjectsAndConferencesComponent;
  let fixture: ComponentFixture<ProjectsAndConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsAndConferencesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
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

import { Component, OnInit } from '@angular/core';
import { Projects, ProjectsService, emptyProject } from '@dashboard/core-data';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dashboard-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Projects;
  form: FormGroup;

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) { }

  resetProject() {
    this.form.reset();
    this.selectProject(emptyProject);
  }

  ngOnInit() {
    this.getProjects();
    this.initForm();
    this.resetProject();
  }

  selectProject(project: Projects) {
    this.selectedProject = project;
    this.form.patchValue(project);
    console.log(project);
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  updateProject(project) {
    this.projectsService.update(project)
      .subscribe(() => {
        this.getProjects();
        this.resetProject();
      });
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(() => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(() => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: [''],
      details: ['']
    });
  }

}

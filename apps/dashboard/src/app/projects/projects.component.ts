import { Component, OnInit } from '@angular/core';
import { Projects, ProjectsService } from '@dashboard/core-data';

@Component({
  selector: 'dashboard-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Projects;

  constructor(private projectsService: ProjectsService) { }
  
  resetProject() {
    const emptyProject: Projects = {
      id: null,
      title: '',
      details: ''
    }
    this.selectProject(emptyProject);
  }

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
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
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }

}

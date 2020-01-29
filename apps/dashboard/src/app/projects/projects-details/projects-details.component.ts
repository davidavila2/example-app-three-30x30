import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Projects } from '@dashboard/core-data';

@Component({
  selector: 'dashboard-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {
  currentProject: Projects;
  originalTitle;
  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value)
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}

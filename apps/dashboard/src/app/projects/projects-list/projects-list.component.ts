import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Projects } from '@dashboard/core-data';

@Component({
  selector: 'dashboard-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() projects: Projects[]
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}

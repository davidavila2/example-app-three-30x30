import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.scss']
})
export class WildCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  redirectToProjects() {
    this.router.navigate(['/projects']);
  }
}

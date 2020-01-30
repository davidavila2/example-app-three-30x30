import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from '@dashboard/ui-login';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildCardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
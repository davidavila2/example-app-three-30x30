import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@dashboard/material';
import { CoreDataModule } from '@dashboard/core-data';
import { UiLoginModule } from '@dashboard/ui-login';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { RoutingModule } from './routing.module';
import { WildCardComponent } from './wild-card/wild-card.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    CoreDataModule,
    RoutingModule,
    FormsModule,
    UiLoginModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsDetailsComponent,
    WildCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

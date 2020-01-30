import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://server-30-x-30.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'phones'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  create(project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project)
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrlForId(projectId))
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  providers: [ProjectsService],
})
export class Projects implements OnInit {
  projects = {} as Project[];
  expandedProjects: boolean[] = [];

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Hagar Hashesh-Projects');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
    this.expandedProjects = new Array(this.projects.length).fill(false);
  }

  toggleProjectDetails(index: number): void {
    this.expandedProjects[index] = !this.expandedProjects[index];
  }
}

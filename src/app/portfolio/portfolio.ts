import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  providers: [ProjectsService],
})
export class Portfolio implements OnInit {
  projects = {} as Project[];

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Hagar Hashesh-Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}

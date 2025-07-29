import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  featuredProject = {} as Project;
  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Hagar Hashesh-Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
}

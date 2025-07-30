import { Injectable } from '@angular/core';
import { Tag } from '../_models/tag';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Student Record System',
      projectLink: 'https://github.com',
      summary:
        'A console-based student data management system using C programming and data structures',
      description:
        'Has features of add, delete, update, count and display student records also implements efficient ID-based data retrievaland focuses on deep understanding of memory management and algorithmic design.',
      tags: [Tag.C],
    },
    {
      id: 1,
      name: 'Portfolio Website',
      projectLink: 'https://github.com',
      summary: 'Personal portfolio website built with Angular',
      description:
        'Designed and developed a responsive portfolio website showcasing my projects and skills. Implemented Angular components, routing, and responsive design with Bootstrap.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 2,
      name: 'Payment Application',
      projectLink: 'https://github.com',
      summary:
        'Simulates a secure card payment workflow with account and transaction management.',
      description:
        'Handles Authentication, validation, transaction logging, and balance updates used file handling, and modular code structure also emulates a real-world financial system with precise logic flow.',
      tags: [Tag.C],
    },
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id:' + id);
    }

    return project;
  }
}

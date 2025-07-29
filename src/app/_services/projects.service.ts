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
      name: 'Stock Market Analyzer',
      pictures: [
        '../../assets/1.jpeg',
        '../../assets/2.jpeg',
        '../../assets/3.jpeg',
      ],
      projectLink: '',
      summary: 'Python project that analyzes stock market data.',
      description:
        'Developed a data analysis tool that processes historical stock data, calculates key metrics, and generates visual reports. Implemented pandas for data manipulation and matplotlib for visualization.',
      tags: [Tag.PYTHON],
    },
    {
      id: 1,
      name: 'Portfolio Website',
      pictures: [
        '../../assets/1.jpeg',
        '../../assets/2.jpeg',
        '../../assets/3.jpeg',
      ],
      projectLink: '',
      summary: 'Personal portfolio website built with Angular',
      description:
        'Designed and developed a responsive portfolio website showcasing my projects and skills. Implemented Angular components, routing, and responsive design with Bootstrap.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS],
    },
    {
      id: 2,
      name: 'E-commerce Platform',
      pictures: [
        '../../assets/1.jpeg',
        '../../assets/2.jpeg',
        '../../assets/3.jpeg',
      ],
      projectLink: '',
      summary: 'Fullstack e-commerce application with React and ASP.NET',
      description:
        '"Built a complete e-commerce solution with product listings, shopping cart, and checkout system. Developed RESTful API with ASP.NET Core and implemented frontend with React and Redux.',
      tags: [Tag.REACT, Tag.CSHARP, Tag.ASPNET],
    },
    {
      id: 3,
      name: 'Weather API Service',
      pictures: [
        '../../assets/1.jpeg',
        '../../assets/2.jpeg',
        '../../assets/3.jpeg',
      ],
      projectLink: '',
      summary: 'RESTful API for weather data aggregation',
      description:
        'Created a web API that aggregates weather data from multiple sources and provides a unified interface. Implemented authentication, rate limiting, and caching for better performance.',
      tags: [Tag.CSHARP, Tag.ASPNET],
    },
    {
      id: 4,
      name: 'Price Tracker Extension',
      pictures: [
        '../../assets/1.jpeg',
        '../../assets/2.jpeg',
        '../../assets/3.jpeg',
      ],
      projectLink: '',
      summary: 'Chrome extension for furniture price tracking',
      description:
        'Developed a browser extension that monitors furniture prices across multiple retailers. Implemented background scripts, content injection, and local storage for price history.',
      tags: [Tag.JAVASCRIPT],
    },
    {
      id: 5,
      name: 'Train Tracker App',
      pictures: [
        '../../assets/1.jpeg',
        '../../assets/2.jpeg',
        '../../assets/3.jpeg',
      ],
      projectLink: '',
      summary: 'Android application for train schedules',
      description:
        'Mobile app that provides real-time train schedules and notifications. Implemented using Java with Android Studio, featuring location services and push notifications.',
      tags: [Tag.JAVA],
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

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project = {} as Project;
  @Input() projectIndex: number = 0;
  @Output() toggleDetails = new EventEmitter<number>();

  constructor() {}

  onToggleDetails(): void {
    this.toggleDetails.emit(this.projectIndex);
  }
}

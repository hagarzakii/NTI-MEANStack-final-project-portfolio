import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-modal',
  standalone: false,
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css',
})
export class ProjectModal {
  project?: Project;
  constructor(public activeModal: NgbActiveModal) {}
}

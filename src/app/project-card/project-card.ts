import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';
import {
  NgbModalRef,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project = {} as Project;
  bsModalRef?: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  openProjectModal() {
    const modalOptions: NgbModalOptions = {
      size: 'lg',
      centered: true,
      windowClass: 'custom-modal-class',
    };
    const modalRef = this.modalService.open(ProjectModal, modalOptions);
    modalRef.componentInstance.project = this.project;
  }
}

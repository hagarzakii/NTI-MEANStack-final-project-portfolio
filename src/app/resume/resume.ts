import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Hagar Hashesh-Resume');
  }
  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
}

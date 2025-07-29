import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {
  NgbAccordionModule,
  NgbCarousel,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { ProjectCard } from './project-card/project-card';
import { ProjectModal } from './project-modal/project-modal';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    App,
    Header,
    Nav,
    Home,
    Portfolio,
    Resume,
    Contact,
    ProjectCard,
    ProjectModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbAccordionModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
  ],
  bootstrap: [App],
})
export class AppModule {}

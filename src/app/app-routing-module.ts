import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'projects', component: Projects },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: '**', component: Home, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

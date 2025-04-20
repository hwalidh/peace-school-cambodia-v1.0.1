import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about.component';
import { ProgramsPageComponent } from './pages/programs/programs.component';
import { VolunteerPageComponent } from './pages/volunteer/volunteer.component';
import { ContactPageComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'programs', component: ProgramsPageComponent },
  { path: 'volunteer', component: VolunteerPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];
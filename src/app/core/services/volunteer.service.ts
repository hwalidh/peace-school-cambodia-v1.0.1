import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface VolunteerProgram {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private programs: VolunteerProgram[] = [
    {
      id: 'english-teaching',
      title: 'English Teaching',
      description: 'Share your knowledge and help our students learn English through interactive lessons and activities.',
      requirements: ['Native or fluent English speaker', 'Teaching experience preferred', 'Bachelor\'s degree'],
      image: '//assets/images/gallery/volunteer/teaching-english.jpeg'
    },
    {
      id: 'cultural-exchange',
      title: 'Cultural Exchange',
      description: 'Immerse yourself in Cambodian culture while sharing your own cultural background with our community.',
      requirements: ['Open-minded', 'Interest in Cambodian culture', 'Willingness to participate in local activities'],
      image: '/assets/images/gallery/volunteer/cultural-exchange.jpeg'
    },
    {
      id: 'community-projects',
      title: 'Community Projects',
      description: 'Work on various community development initiatives including infrastructure, health, and education.',
      requirements: ['Project management skills', 'Team player', 'Previous volunteer experience'],
      image: '/assets/images/gallery/volunteer/communuity-project.JPG'
    },
    {
      id: 'sports-activities',
      title: 'Sports & Activities',
      description: 'Lead sports activities and organize recreational events for students after school.',
      requirements: ['Sports coaching experience', 'High energy', 'Good with children'],
      image: '/assets/images/gallery/volunteer/sport-and-other-activities.jpeg'
    }
  ];

  getPrograms(): Observable<VolunteerProgram[]> {
    return of(this.programs);
  }

  getProgramById(id: string): Observable<VolunteerProgram | undefined> {
    return of(this.programs.find(p => p.id === id));
  }
}
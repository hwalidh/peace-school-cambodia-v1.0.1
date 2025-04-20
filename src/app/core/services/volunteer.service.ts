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
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754'
    },
    {
      id: 'cultural-exchange',
      title: 'Cultural Exchange',
      description: 'Immerse yourself in Cambodian culture while sharing your own cultural background with our community.',
      requirements: ['Open-minded', 'Interest in Cambodian culture', 'Willingness to participate in local activities'],
      image: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86'
    },
    {
      id: 'community-projects',
      title: 'Community Projects',
      description: 'Work on various community development initiatives including infrastructure, health, and education.',
      requirements: ['Project management skills', 'Team player', 'Previous volunteer experience'],
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b'
    },
    {
      id: 'sports-activities',
      title: 'Sports & Activities',
      description: 'Lead sports activities and organize recreational events for students after school.',
      requirements: ['Sports coaching experience', 'High energy', 'Good with children'],
      image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37'
    }
  ];

  getPrograms(): Observable<VolunteerProgram[]> {
    return of(this.programs);
  }

  getProgramById(id: string): Observable<VolunteerProgram | undefined> {
    return of(this.programs.find(p => p.id === id));
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerService, VolunteerProgram } from '../../core/services/volunteer.service';
import { VolunteerGalleryComponent } from '../../shared/components/volunteer/volunteer-gallery.component';

@Component({
  selector: 'app-volunteer-page',
  standalone: true,
  imports: [CommonModule, VolunteerGalleryComponent],
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerPageComponent {
  programs: VolunteerProgram[] = [];

  constructor(private volunteerService: VolunteerService) {
    this.volunteerService.getPrograms().subscribe(
      programs => this.programs = programs
    );
  }
}
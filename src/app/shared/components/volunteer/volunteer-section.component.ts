import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-volunteer-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './volunteer-section.component.html',
  styleUrls: ['./volunteer-section.component.scss']
})
export class VolunteerSectionComponent {}
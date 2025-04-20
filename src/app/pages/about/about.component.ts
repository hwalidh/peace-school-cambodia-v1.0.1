import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../shared/components/about/about.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutPageComponent {}
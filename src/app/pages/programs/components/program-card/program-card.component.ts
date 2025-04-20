import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription?: string;
  requirements?: string[];
  duration?: string;
  schedule?: string;
  fees?: string;
}

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent {
  @Input() program!: Program;
  @Output() click = new EventEmitter<void>();
}
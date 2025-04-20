import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

interface ProgramDetails {
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
  selector: 'app-program-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './program-modal.component.html',
  styleUrls: ['./program-modal.component.scss']
})
export class ProgramModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProgramModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProgramDetails
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
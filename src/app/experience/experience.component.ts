import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
   // Interface for experience data
}

export interface Experience {
  title: string;
  description: string;
  imageUrl: string; // URL for the image
  isLeft?: boolean; // Optional flag to control image placement
}


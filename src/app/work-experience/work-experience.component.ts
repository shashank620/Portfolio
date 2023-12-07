import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
   workExpList: WorkExperience[]=[
    {
      role:'Software Developer',
      company:'Procloudware Service Pvt Ltd.',
      duration :'01/06/2022 -- 01/05/2023',
      description:[
        'I had to handle the project individually.',
        'I worked on project alone and handled the foreign client',
        'I solved the problem as per their requirements.'
      ]
    }
   ]
}

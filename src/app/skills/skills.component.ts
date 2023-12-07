import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[]=[
    {
      name:'Angular',
      level:'Intermediate',
      rating:70,
    },
    {
      name:'Angular Material(Library)',
      level:'Expert',
      rating:85,
    },
    {
      name:'Java Script',
      level:'Intermediate',
      rating:70,
    },
    {
      name:'HTML, CSS',
      level:'Expert',
      rating:90,
    },
    {
      name:'Bootstrap',
      level:'Expert',
      rating:90,
    },
    {
      name:'GitHub',
      level:'Expert',
      rating:85,
    },
  ]
}

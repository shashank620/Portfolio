import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Delta Air Lines/Flight &plane Tickets + Hotel Tickets & Rental Cars (delta.com): (09/2022 - 01/2023)',
      technologies: 'Angular, Java Script, IDP (IDP- which is own library of Delta.com.)',
      description: [
        'https://www.delta.com/',
        'Worked as a team to develop website that are powered by delta.',
        'Built the Interface of delta that can be used to book ticket.',
        "Outcome - Users can easily booked the ticket with step by step information, and that's Buisness growing day by day.",
      ],
    },
    {
      title: 'Employee Management System (ADP): (02/2023 - 05/2023)',
      technologies: 'Angular, Java Script, ADP(which is own library of ADP).',
      description: [
        'Worked as a team and Managing UI using HTML, CSS, JavScript, and Angular',
        "Outcome - Employee can easily use company profile page, and it's also a secure",
        'Learned ADP Library to build this project.',
      ],
    },
    {
      title: 'Ecommerce Personal Projects',
      technologies: 'HTML, CSS, Java Script, Angular, Bootstrap',
      description: [
        'Designed Responsive and Customized Website Development.',
        'All product Show in UI with API.',
        'User data show with Json.',
        'Filter Product Type From API data.'
      ],
    },
  ];
}

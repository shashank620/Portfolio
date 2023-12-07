import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent implements OnInit {

  myData: string[][] = [
    ['Name', 'Shashank'],
    ['DOB', '17/04/2002'],
    ['Work Exp', '1 years'],
    ['Educaton', 'B.tech (Computer Science Engineering)'],
    ['Hobby', 'Writing script of Action Movie']
  ]

  aboutMe: string[] = [
    'I am Frontend Developer.',
    'I have 1 year of experience in Frontend Development.',
    'I am very enthusiastic for this role.',
    
  ]
  // constructor() { }


  ngOnInit(): void {
  }

}

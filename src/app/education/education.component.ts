import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Global group of institutes Amritsar',
      course:'B.tech Computer science Engineering',
      duration:'2018-2022',
      score:'70%',
    },
    {
      institute: "Prestine Children's High School",
      course:'Science',
      duration:'2016-2018',
      score:'55%',
    },
    {
      institute:  "Prestine Children's High School",
      course:'Science',
      duration:'2016',
      score:'94%',
    },
  ];

  ngOnInit(): void {

  }

}

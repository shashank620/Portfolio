import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent implements OnInit {

  constructor( private breakpointObserver: BreakpointObserver ){}

  ngOnInit(){
    
  }
}

// constructor(
//   private element: ElementRef,
//   private breakpointObserver: BreakpointObserver
// ) {
//   this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
//     .subscribe({
//       next: (result: any) => {
//         console.log("result,", result);
//         for (let breakpoint of Object.keys(result.breakpoints)) {
//           if (result.breakpoints[breakpoint]) {
//             if (breakpoint === Breakpoints.HandsetPortrait) {
//               this.element.nativeElement.classList.remove('pc');
//             }
//             if (breakpoint === Breakpoints.WebLandscape) {
//               this.element.nativeElement.classList.add('pc');
//             }
//           }
//         }
//       },
//     });
// }

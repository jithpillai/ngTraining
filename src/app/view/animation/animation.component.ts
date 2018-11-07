import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from "@angular/animations";
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('changeColor',[
      state('off', style({
        backgroundColor:'white',
        height: '10px',
        width: '10px'
      })),
      state('on', style({
        backgroundColor:'red',
        height: '200px',
        width: '200px'
      })),
      transition('off=>on', animate('2s')),
      transition('on=>off', animate('2s'))
    ])
  ]
})
export class AnimationComponent implements OnInit {
  divState:string = 'off';
  constructor() { }
  toggleColor() {
    this.divState = this.divState === 'on' ? 'off' : 'on';
  }
  ngOnInit() {
  }

}

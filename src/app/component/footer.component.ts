import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<p class = "footer">&copy; 2018 <a href="http://huedroid.com">huedroid.com</a><p>',
  styles: [
    `.footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: lightgray;
        color: black;
        text-align: center;
    }
    a {
      color: green
    }`
    ]   
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

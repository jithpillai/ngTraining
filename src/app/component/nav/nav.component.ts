import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit() {
    let count:any  = localStorage.getItem('siteCount') || 0;
    count = parseInt(count);
    count ++;
    this.count = count;
    localStorage.setItem('siteCount', this.count.toString());
  }
  counter() {
    this.count++;
    localStorage.setItem('siteCount', this.count.toString());
  }
  showToolTip() {
    console.log("Click to Increase the count");
    
  }
}

import { Component, OnInit } from '@angular/core';
import { WebService } from "../../service/web-service.service";
@Component({
  selector: 'app-http-load',
  templateUrl: './http-load.component.html',
  styleUrls: ['./http-load.component.css'],
  providers: [WebService]
})
export class HttpLoadComponent implements OnInit {
  webDetails = [];
  bgColor="#fff";
  constructor(private webS: WebService) { }
  ngOnInit() {
    this.webS.getWebDetails().subscribe(data=>this.webDetails = data);
  }

}

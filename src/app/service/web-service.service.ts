import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class WebService {
  private url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) {}
  getWebDetails() {
    return this.http.get(this.url).map((response: Response)=> response.json());
  }
}

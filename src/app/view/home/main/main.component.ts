import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SigningService} from '../../login/signing.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [SigningService]
})
export class MainComponent implements OnInit {
  availableUsers = [];
  bgColor= '#fff';
  constructor(private signing: SigningService, private router: Router) {
    let users = signing.getUsers();
    this.availableUsers = users;
  }
  onRowSelect(user) {
    this.router.navigate(['/profile', user.userName]);
  }
  ngOnInit() {
  }

}

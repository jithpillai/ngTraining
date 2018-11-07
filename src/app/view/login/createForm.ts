import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {SigningService} from './signing.service';
@Component({
  templateUrl: './createForm.html'
})
export class CreateFormComponent implements OnInit {
  bgColor= '#fff';
  constructor(private signing: SigningService, private router: Router) {}

  ngOnInit() {
  }
  onSubmit(value:any) {
    if (!value.name) {
        return;
    }
    if (!value.userName) {
      return;
    }
    if (!value.pwd) {
      return;
    }
    let users = this.signing.getUsers();
    let matchedUser = users.find(v => v.userName.toLowerCase() === value.userName.toLowerCase());

    if (matchedUser) {
      alert("Username already Registered");
      return;
    }
    value.address = {};
    this.signing.addUser(value);
    alert("User Registered Successfully");
    this.router.navigate(['/profile', value.userName]);
  }
}

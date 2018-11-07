import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SigningService } from '../login/signing.service';
import {FormControl, FormGroup} from '@angular/forms'
@Component({
  //template: `<h3>The UserName Selected:{{userName}}</h3>`
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  bgColor= '#fff';
  user = {address:{}};
  userName= "";
  showDetails = true;
  
  detailsForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    userName: new FormControl(),
    phone: new FormControl(),
    pwd: new FormControl(),
    nation: new FormControl(),
    address: new FormGroup({
        city: new FormControl(),
        pinCode: new FormControl()
    })
})
  constructor(private route: ActivatedRoute, private signing: SigningService) {}

  ngOnInit() {
      this.userName = this.route.snapshot.params['userName'] || "";
      //this.showDetails = this.userName === "" ? false : true;
      let users = this.signing.getUsers();
      let matchedUser = users.find(v => v.userName.toLowerCase() === this.userName.toLowerCase());
      this.user = matchedUser ? {...this.detailsForm.value, ...matchedUser} : this.detailsForm.value;
  }

}

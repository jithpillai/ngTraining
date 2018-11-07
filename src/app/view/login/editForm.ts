import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SigningService } from './signing.service'
import {FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  templateUrl: './editForm.html' 
})
export class EditFormComponent {
  bgColor= '#fff';
  userName="";
  user={};
  detailsForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      age: new FormControl(),
      userName: new FormControl('',[Validators.required, Validators.minLength(3)]),
      phone: new FormControl(),
      pwd: new FormControl(),
      nation: new FormControl(),
      address: new FormGroup({
          city: new FormControl(),
          pinCode: new FormControl()
      })
  });
  constructor(private route: ActivatedRoute, private signing: SigningService, private router:Router) {}
  ngOnInit() {
    this.userName = this.route.snapshot.params['userName'] || "";
    // this.showDetails = this.userName === "" ? false : true;
    let users = this.signing.getUsers();
    let matchedUser = users.find(v => v.userName.toLowerCase() === this.userName.toLowerCase());
    this.user = {...this.detailsForm.value, ...matchedUser};
    this.detailsForm.setValue(this.user)
  }
  onSubmit() {
    let users = this.signing.getUsers();
    let editedUser = this.detailsForm.value;
    users = users.map((user) => {
      if (user.userName === editedUser.userName) {
        user = {...user, ...editedUser};
      }
      return user;
    });
    console.log(users);
    this.signing.updateStorage(users);
    this.router.navigate([`/profile/${editedUser.userName}`]);
  }

}

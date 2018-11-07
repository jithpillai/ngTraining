import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigningService {
  availableUsers = [];
  constructor() {
    let users:any  = localStorage.getItem('siteUsers');

    if (users) {
      users = JSON.parse(users);
    } else {
      users = [];
      localStorage.setItem('siteUsers','[]');
    }
    this.availableUsers = users;
  }

  addUser(user) {
    this.availableUsers.push(user);
    this.updateStorage();
  }
  updateStorage(users=this.availableUsers) {
    localStorage.setItem('siteUsers',JSON.stringify(users));
  }
  getUsers() {
    let users = localStorage.getItem('siteUsers');
    this.availableUsers = JSON.parse(users);
    return this.availableUsers;
  }
}

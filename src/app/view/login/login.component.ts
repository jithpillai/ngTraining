import { Component, OnInit } from '@angular/core';
import { signin } from './login.model';
import {Router} from '@angular/router';
import {SigningService} from './signing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../../component/popModal'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SigningService]
})

export class LoginComponent implements OnInit {
  
  bgColor = '#fff';
  cName = "";
  cAge = "";
  userName = "";
  verifyText="Verify";
  validationMsg= "Invalid Username or Password";
  displayUsers = false;
  displayMsg = false;
  verifyMsg = '';
  invalidForm= false;
  infoMsg = 'User Name Available';
  errorMsg = "User Name Registered, find the Registered users below";
  availableUsers = [];
  constructor(private signing: SigningService, private router: Router, private modalService: NgbModal) { }
  toggleVerify(userName) {
    if (!userName) {
      return;
    }
    this.displayMsg = !this.displayMsg;
    let users = this.signing.getUsers();
    this.availableUsers = users;
    if (this.displayMsg) {
      let matchedUser = users.find(v => v.userName.toLowerCase() === userName.toLowerCase());
      this.displayUsers = !!matchedUser;
      this.verifyMsg = this.displayUsers ? this.errorMsg : this.infoMsg;
      this.verifyText = "Hide";
    } else {
      this.displayUsers =  false;
      this.verifyText = "Verify";
    }
    
  }
  registerUser(userName, pwd) {
    this.router.navigate(['/profile/create']);
  }
  onLogin(userName, pwd) {
    if (!userName) {
      return;
    }
    if (!pwd) {
      return;
    }
    let users = this.signing.getUsers();
    let matchedUser = users.find(v => v.userName.toLowerCase() === userName.toLowerCase());
    if (matchedUser) {
      if (matchedUser.pwd === pwd) {
        //alert("Login Successful");
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.title = `Welcome ${matchedUser.userName}`;
        modalRef.componentInstance.message = 'You have logged in Successfully';
        this.router.navigate(['/profile', matchedUser.userName]);
      } else {
        this.invalidForm = true;
        this.validationMsg = "Incorrect Password, Note that Password is case sensitive";
      }
    } else {
      this.invalidForm = true;
      this.validationMsg = "User not Registered";
    }
  }
  valuechange() {
    this.displayUsers =  false;
    this.displayMsg =  false;
    this.verifyText = "Verify";
  }
  onReset(form) {
    form.reset();
  }
  ngOnInit() {
  }

}

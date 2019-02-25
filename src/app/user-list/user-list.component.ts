import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList = [];
  addNew = {};
  isNewUser: boolean = false;
  constructor(
  ) { }

  ngOnInit() {
  }
  newUser() {
    this.isNewUser = !this.isNewUser;
  }
  save(data) {
    this.userList.push(data);
    this.addNew = {};

    this.isNewUser = !this.isNewUser
  }

  delete(index) {
    this.userList.splice(index, 1);
  }
  edit(user, index) {
    this.isNewUser = !this.isNewUser;
    this.addNew = user;
    this.userList.splice(index, 1);
  }
}

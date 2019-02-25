import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

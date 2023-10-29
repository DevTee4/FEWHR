import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Role } from 'src/app/models/Role';
import { faker } from '@faker-js/faker'



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor() { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    let roles =new Role();
    roles.name = faker.person.jobTitle();
    roles.description = "Administrator";
    for (var i = 1; i <= 300; i++) {
      this.users.push({
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        expiryDate: 0,
        password: '',
        roleId: '',
        status: Status.Active,
        role: roles,
        isAppAdmin: false
      });
      console.log(this.users);
    }
  }

}

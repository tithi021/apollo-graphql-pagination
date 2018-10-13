import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import * as Query from '../graphql.query';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.apollo.watchQuery({
      query: Query.getUser
    })
    .valueChanges
    .subscribe((data: any) => {
      this.users = data.data.users;
      console.log(this.users)
    })
  }

}

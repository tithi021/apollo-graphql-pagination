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
  type: string;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.apollo.watchQuery<any>({
      query: Query.getUser,
      variables: {
        type: this.type,
        offset: 0,
        limit: 3
      }
    })
    .valueChanges
    .subscribe((data: any) => {
      this.users = data.data.users;
      console.log(this.users)
    })
  }

}

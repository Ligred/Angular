import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';
let users = [
  {name: 'User1', surname: 'User-1', mail: 'some1@mail.com', age: '20', id: 1},
  {name: 'User2', surname: 'User-2', mail: 'some2@mail.com', age: '22', id: 2},
  {name: 'User3', surname: 'User-3', mail: 'some3@mail.com', age: '24', id: 3},
  {name: 'User4', surname: 'User-4', mail: 'some4@mail.com', age: '26', id: 4}
];

Injectable({
  providedIn: 'root'
});
export class UsersService {
  public subject = new Subject<any>();

  constructor() { }

  get(): Promise<User[]> {
    return new Promise(resolve => resolve(users));
  }
  getObsrveble() {
    return this.subject;
  }
  add(user: User): Promise<User> {
    return new Promise(resolve => {
      user.id = Date.now();
      users = [...users, user];
      this.subject.next(users);
      resolve(user);
    });
  }
  delete(id: number): Promise<User> {
    return new Promise(() => {
      users = users.filter(user => user.id !== id);
      this.subject.next(users);
    });
  }
  edit(editedUser: User): Promise<User> {
    return new Promise(() => {
      users = users.map(user => user.id === editedUser.id ? editedUser : user);
      this.subject.next(users);
    });
  }
}

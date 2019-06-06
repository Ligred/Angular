import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit, OnDestroy {
  public users: any;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
    this.userService.getObsrveble().subscribe(users => this.users = users);
  }

  ngOnDestroy(): void {
    this.userService.getObsrveble().unsubscribe();
  }

  getUsers(): void {
    this.userService.get().then(users => this.users = users);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public user;
  @Output() public clickEditUser = new EventEmitter();
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  deleteUser(user: User): void {
    this.userService.delete(user.id);
  }

  onClickUpdate(event: Event, user: User): void {
    this.clickEditUser.emit(user);
    event.stopPropagation(); // For what reasone we need this function?
  }
}

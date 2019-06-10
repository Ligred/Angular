import { Pipe, PipeTransform } from '@angular/core';
import { User } from "../../user";

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(users: User[], filterData: any): User[] {
    if(!users) { return }
    users = [...users];
    return filterData.filerInput === "" ? users
      : users.filter(user => ~user[filterData.selectField].indexOf(filterData.filerInput));
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users-list/users.component';
import { UserComponent } from './user-item/user.component';

import { ActionsModule } from './actions/actions.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,

  ],
  imports: [
    CommonModule,
    ActionsModule
  ],
  exports: [
    UsersComponent,
    UserComponent,
  ]
})
export class UsersModule { }

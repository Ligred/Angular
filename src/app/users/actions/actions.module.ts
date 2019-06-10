import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalWindowComponent } from './modal-window/modal-window.component';
import {UsersFilterPipe} from './users-filer/users-filter.pipe';
import {UsersFilerComponent} from './users-filer/users-filer.component';


@NgModule({
  declarations: [
    ModalWindowComponent,
    UsersFilterPipe,

    UsersFilerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalWindowComponent,
    UsersFilerComponent,
    UsersFilterPipe,
  ]
})
export class ActionsModule { }

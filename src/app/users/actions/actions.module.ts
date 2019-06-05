import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [
    ModalWindowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    ModalWindowComponent
  ]
})
export class ActionsModule { }

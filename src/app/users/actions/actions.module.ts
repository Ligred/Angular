import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalWindowComponent } from './modal-window/modal-window.component';
//import { MinNumberDirective } from './min-number.directive';

@NgModule({
  declarations: [
    ModalWindowComponent,
    //MinNumberDirective
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalWindowComponent
  ]
})
export class ActionsModule { }

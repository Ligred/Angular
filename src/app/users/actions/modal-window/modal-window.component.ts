import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { modalAction, modalActionConfig } from '../action.constants';
import { ActionConfig } from '../action.interface';
import { User } from '../../user';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  private newUser: User = new User();
  private modalRef: NgbModalRef;
  modalAttributes: ActionConfig;
  onSubmit: () => void;
  @Input() private user: any;
  @ViewChild('myModal') myModal: TemplateRef<any>; //TODO read about @ViewChild
  constructor(private modalService: NgbModal,
              private usersService: UsersService,
              @Inject(modalAction) private config: ActionConfig) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>): void {
    this.newUser = new User();
    this.onSubmit = this.addUser;
    this.modalRef = this.modalService.open(template, {backdrop: 'static'});
    this.modalAttributes =  {...this.config};
  }
  openModalUpdate(user: User): void {
    this.newUser = {...user};
    this.onSubmit = this.editUser;
    this.modalAttributes = {
      title: 'Update User',
      btnCaption: 'Update',
      btnClass: 'btn-warning'
    };
    this.modalRef = this.modalService.open(this.myModal, {backdrop: 'static'});
  }
  addUser(): void {
    this.usersService.add(this.newUser).then(() => {
      this.newUser = new User();
      this.modalRef.close();
    });
  }
  editUser(): void {
    this.usersService.edit(this.newUser);
    this.modalRef.close();
  }
}

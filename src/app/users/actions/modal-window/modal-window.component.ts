import {
  Component,
  OnInit,
  Input,
  Inject,
  ViewChild,
  TemplateRef
} from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { modalAction, modalActionConfig } from "../action.constants";
import { ActionConfig } from "../action.interface";
import { User } from "../../user";
import { UsersService } from "../../users.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { minAgeValidator, maxAgeValidator, integerValidator } from '../actionValidator';

@Component({
  selector: "app-modal-window",
  templateUrl: "./modal-window.component.html",
  styleUrls: ["./modal-window.component.css"]
})
export class ModalWindowComponent implements OnInit {
  private newUser: User = new User();
  private modalRef: NgbModalRef;
  modalAttributes: ActionConfig;
  onSubmit: () => void;
  @Input() private user: any;
  @ViewChild("myModal") myModal: TemplateRef<any>; //TODO read about @ViewChild
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private usersService: UsersService,
    @Inject(modalAction) private config: ActionConfig
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [
        this.newUser.name,
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)]
      ],
      surname: [
        this.newUser.surname,
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)]
      ],
      mail: [
        this.newUser.mail,
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")
        ]
      ],
      age: [this.newUser.age, [
        Validators.required,
        minAgeValidator(16),
        maxAgeValidator(100),
        integerValidator()
      ]]
    });
  }

  get name() {
    return this.userForm.get("name");
  }
  get surname() {
    return this.userForm.get("surname");
  }
  get mail() {
    return this.userForm.get("mail");
  }
  get age() {
    return this.userForm.get("age");
  }

  openModal(template: TemplateRef<any>): void {
    this.newUser = new User();
    this.userForm.patchValue({ ...this.newUser });
    this.onSubmit = this.addUser;
    this.modalRef = this.modalService.open(template, { backdrop: "static" });
    this.modalAttributes = { ...this.config };
  }
  openModalUpdate(user: User): void {
    this.userForm.patchValue({ ...user });
    this.onSubmit = this.editUser;
    this.modalAttributes = {
      title: "Update User",
      btnCaption: "Update",
      btnClass: "btn-warning"
    };
    this.modalRef = this.modalService.open(this.myModal, {
      backdrop: "static"
    });
  }
  addUser(): void {
    this.usersService.add({ ...this.userForm.value }).then(() => {
      this.modalRef.close();
    });
  }
  editUser(): void {
    this.usersService.edit({ ...this.userForm.value });
    this.modalRef.close();
  }
}

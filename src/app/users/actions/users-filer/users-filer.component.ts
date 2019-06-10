import { Component, OnInit } from '@angular/core';
import { User} from "../../user";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users-filer',
  templateUrl: './users-filer.component.html',
  styleUrls: ['./users-filer.component.css'],
})
export class UsersFilerComponent implements OnInit {
  private user: User = new User();
  private userField: string[];
  private  filterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userField = Object.keys(this.user).filter(i => i !== "id");
    this.filterForm = this.fb.group({
      filterInput: [''],
      selectKey: [this.userField[0]]
    });
}
  public getFilerData(): any {
    return {
      filerInput: this.filterForm.get('filterInput').value,
      selectField: this.filterForm.get('selectKey').value
    }
  }


}

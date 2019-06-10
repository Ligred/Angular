import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFilerComponent } from './users-filer.component';

describe('UsersFilerComponent', () => {
  let component: UsersFilerComponent;
  let fixture: ComponentFixture<UsersFilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { modalAction, modalActionConfig } from './users/actions/action.constants';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: modalAction, useValue: modalActionConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

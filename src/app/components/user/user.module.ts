import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';


import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from "@angular/material/tabs";
import { UserCreateComponent } from './user-create/user-create.component';
import {MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';
@NgModule({
  declarations: [UserListComponent, UserCreateComponent, RepDialogComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,MatDialogModule,MatButtonModule
  ],
  entryComponents:[RepDialogComponent]
})
export class UserModule { }

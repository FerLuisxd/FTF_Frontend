import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from "@angular/common/http"
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UserCreateComponent } from './user-create/user-create.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from "@angular/material/tabs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

import { MatIconModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [UserListComponent, UserCreateComponent, RepDialogComponent],
  imports: [
    CommonModule,
    UserRoutingModule,

    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,MatDialogModule,MatButtonModule
  ],
  entryComponents:[RepDialogComponent],
  providers:[UserService]
})
export class UserModule { }

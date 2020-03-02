import { Component, OnInit } from '@angular/core';
import { UserCreateComponent } from '../user-create/user-create.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openCreate(){
    const dialog = this.dialog.open(UserCreateComponent,{
      width:'700px',
      data: {}
    })
    dialog.afterClosed().subscribe(result=>{
      //alert(`User chose ${result}`)
    })
  }

}

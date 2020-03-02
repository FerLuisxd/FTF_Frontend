import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  emailFormControl: FormControl;

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
  }

  openRepDialong(){
    const dialog = this.dialog.open(RepDialogComponent,{
      width:'250px',
      data: {}
    })
    dialog.afterClosed().subscribe(result=>{
      alert(`User chose ${result}`)
    })

  }

}

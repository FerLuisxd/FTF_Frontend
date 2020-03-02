import { Component, OnInit, Inject } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { UserService } from '../user.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  emailFormControl: FormControl;
  name: string = '';
  email: string = '';
  usergroup :string = '';
  username: string = '';
  Id: number = 0;
  Title = 'New User'

  constructor(public dialog:MatDialog , private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastService:ToastrService) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    console.log(this.data)
    if(this.data!=undefined) {
      this.name = this.data.name
      this.Id = this.data.id
      this.Title = 'Update User'
    }
    
  }

  openRepDialong(){
    const dialog = this.dialog.open(RepDialogComponent,{
      width:'250px',
      data: {}
    })
    dialog.afterClosed().subscribe(result=>{
      //alert(`User chose ${result}`)
    })

  }

  save(){
    let obj:any = {}
    obj.name = this.name
    obj.email = this.email
    obj.usergroup = this.usergroup
    obj.username = this.username
    this.userService.postUser(obj).subscribe((data)=>{
      let res:any = data
      console.log('data',data)
      this.toastService.success('Saved!', 'Success!');
    },err=>{
      console.log("err", err)
      this.toastService.error('Error de sistema', `${err.status}`);
    })
  }
  update(){
    let obj:any = {}
    obj.name = this.name
    obj.id = this.Id
    console.log("obj", obj)
    // this.userService.putUser(obj).subscribe(data=>{
    //   console.log(data)
    //   let res:any = data
    //   if(res==true) this.toastService.success('Actualización exitosa!', 'Success!');
    //   if(res==false) this.toastService.error('Error en la actualización!', 'Oops!');
    //   if(res!=true&&res!=false)this.toastService.error('Error', 'Oops!');
    // },err=>{
    //   console.log("err", err)
    //   this.toastService.error('Error de sistema', `${err.error.mensaje}`);
    // })
  }
}

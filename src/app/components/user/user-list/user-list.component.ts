import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserCreateComponent } from '../user-create/user-create.component';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort} from '@angular/material/sort';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import * as moment from 'moment'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['delete','edit','enabled', 'activated', 'name', 'username','email','usergroup','lastVisit','registered'];
  dataSource:any = []

  constructor(private router: Router, 
    public dialog:MatDialog,private userService:UserService,
    private toastService:ToastrService) { }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Output() object = new EventEmitter<any>()
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.listData()
  }
  listData(){
    this.userService.getUsers().subscribe(data=>{
      console.log('data',data)
      data.forEach(x=>{
        x.lastVisit=moment(x.lastVisit).format('DD-MM-YYYY h:m')
        x.registered= moment(x.registered).format('DD-MM-YYYY h:m')
      }
      )
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
    })
    //console.log(this.dataSource)
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openCreate(){
    const dialog = this.dialog.open(UserCreateComponent,{
      width:'700px',
      data: null
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }
  editUser(elem){
    console.log('editUser',elem)
    const dialog = this.dialog.open(UserCreateComponent,{
      width:'700px',
      data: elem
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }
  deleteUser(elem){
    this.userService.deleteUser(elem.id).subscribe(data=>{
      console.log(data)
      this.listData()
      this.toastService.success('Deleted!', 'Success!');
    },err=>{
      console.log("err", err)
      this.toastService.error('Error');
    })
  }
  onSelect(element){
    
  }
}

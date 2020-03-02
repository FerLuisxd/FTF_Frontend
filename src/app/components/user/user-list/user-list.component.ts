import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserCreateComponent } from '../user-create/user-create.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MatSort} from '@angular/material/sort';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import * as moment from 'moment'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['enabled', 'activated', 'name', 'username','email','usergroup','lastVisit','registered'];
  dataSource:any = []

  constructor(private router: Router, public dialog:MatDialog,private userService:UserService) { }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Output() object = new EventEmitter<any>()

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
      this.dataSource = new MatTableDataSource(data)})
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
    const dialog = this.dialog.open(UserCreateComponent,{
      width:'700px',
      data: elem
    })
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      this.listData()
    })
  }
  onSelect(element){
    this.router.navigate(['/statistics/user/',element.id]);
  }
}

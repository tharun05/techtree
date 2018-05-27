import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TableDataService } from '../../shared/services/tableData.service';
import { User } from '../../apex/entities/tableData.model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User = new User();
  users: any;
  currentDate:any;
  toggleStatus:boolean;
  types = [
    { value: 'email', modal: 'Email' },
    { value: 'sms', modal: 'SMS' },
  ];
  status = [
    { value: 'Active', modal: 'Active' },
    { value: 'Inactive', modal: 'Inactive' },
  ];
  constructor(private tableService: TableDataService) {
  
  }
  ngOnInit() {
    this.users = this.tableService.getUsers();
  }
  addUser(userData) {
    if (this.user) {
      this.users = userData;
      this.tableService.addUser(this.users)
      this.users = this.tableService.getUsers();
      if(this.user.status === 'Active'){
        this.user.action = true;
      }
      else if(this.user.status === 'Inactive'){
        this.user.action = false;
      }
     
      this.user.date = Date.now();
      this.currentDate  = this.user.date
      this.user = new User();
    }
 
  }
  reserUser(){
    this.user = new User();
  }

}

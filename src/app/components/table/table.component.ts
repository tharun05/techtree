import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { User } from '../../apex/entities/tableData.model';
import { TableDataService } from '../../shared/services/tableData.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { TableDataInterface } from '../../apex/entities/table.interface';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns = ['id', 'name', 'type', 'status', 'date', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() users: any;
  @Input() checked: boolean
  status:boolean;
  ELEMENT_DATA;
  userList: any;
  dataSource = new MatTableDataSource<TableDataInterface>(this.userList);
  constructor(private tableDataService: TableDataService) {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.userList = this.users;
    // this.userList.status = this.toggleStatus;
    // console.log(this.toggleStatus)
    // this.dataSource = new MatTableDataSource<PeriodicElement>(this.userList)

    console.log(this.userList)
    for(var item of this.userList){
      this.status = item.action;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = change.currentValue;
      this.userList = curVal;
      console.log(this.userList)
      this.dataSource = new MatTableDataSource<TableDataInterface>(this.userList)
    }
  }
  chekd(e,i?:number) {

    if(e.checked === true){
      this.userList[i].status = "Active"
    }
    else if(e.checked === false){
      this.userList[i].status = "Inactive"
      
    }
    console.log(e.checked)
  }

}

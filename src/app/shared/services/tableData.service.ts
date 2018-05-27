import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TableDataInterface } from '../../apex/entities/table.interface'
// import { User } from '../../apex/entities/tableData.model';

@Injectable()
export class TableDataService {
  user: TableDataInterface[] = [
    {
      id: 172798,
      name: 'Scissors',
      type: 'SMS',
      status: 'Active',
      date: Date.now(),
      action: true,
    },
    {
      id: 345433,
      name: 'Adam',
      type: 'Mail',
      status: 'active',
      date: Date.now(),
      action: true,

    },
    {
      id: 887287,
      name: 'Tharunesh',
      type: 'SMS',
      status: 'Inactive',
      date: Date.now(),
      action: false,

    }, {
      id: 877656,
      name: 'Krishna',
      type: 'Mail',
      status: 'active',
      date: Date.now(),
      action: true,

    }, {
      id: 763442,
      name: 'Vamshi',
      type: 'Mail',
      status: 'Inactive',
      date: Date.now(),
      action: false,
    },
    {
      id: 785443,
      name: 'Angela',
      type: 'SMS',
      status: 'active',
      date: Date.now(),
      action: true,
    },
    {
      id: 565525,
      name: 'Arunesh',
      type: 'SMS',
      status: 'active',
      date: Date.now(),
      action: true,
    },
    {
      id: 876656,
      name: 'Jaykanth',
      type: 'SMS',
      status: 'Inactive',
      date: Date.now(),
      action: false,
    },{
      id: 876656,
      name: 'Jathin',
      type: 'Email',
      status: 'active',
      date: Date.now(),
      action: true,
    },{
      id: 877767,
      name: 'Joseph',
      type: 'SMS',
      status: 'active',
      date: Date.now(),
      action: true,
    },
 
  ]

  constructor() { }

  getUsers() {
    return this.user.slice();
  }

  addUser(user) {
    this.user.push(user);
    console.log(this.user)
  }

}

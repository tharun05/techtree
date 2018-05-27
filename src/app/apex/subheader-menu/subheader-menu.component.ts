import { Component, OnInit,Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { TableDataService } from '../../shared/services/tableData.service';

@Component({
  selector: 'app-subheader-menu',
  templateUrl: './subheader-menu.component.html',
  styleUrls: ['./subheader-menu.component.scss']
})
export class SubheaderMenuComponent implements OnInit {
  menuList: any[];
  activeMenuObject: any;
  isActive:boolean = false;
  states:any = {};
  @Input() inputData;
  
  constructor(private _iconRegistry: MatIconRegistry,private tableService:TableDataService) { 
    this.states.activeItem = 'ADMIN_DASHBOARD';
    this.roleMenuAccess1()
  }

  ngOnInit() {
  }

  subMenus() {
    return [
      {
        "id": 'DASHBOARD',
        "name": "Configuration",
       },
      
      {
        "id": 'PROFILES',
        "name": "Loyalty Management",
      },
      {
        "id": 'users',
        "name": "Manage Users",
      },
      {
        "id": 'members',
        "name": "Manage Members",
      },
      {
        "id": 'management',
        "name": "Coupon Management",
      },
      {
        "id": 'WALKIN',
        "name": "Campaign Management",
      },
      {
        "id": 'others',
        "name": "Others",
      },
      {
        "id": 'advisory',
        "name": "Advisorys",
      },
      {
        "id": 'reports',
        "name": "Reports",
      }
    ]
  }
  
  roleMenuAccess1() {
    this.menuList = [];
      this.subMenus().forEach( (item) => {
            this.menuList.push(item);
      })
  }
}

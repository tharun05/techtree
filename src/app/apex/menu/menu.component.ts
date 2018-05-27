import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: any[];
  activeMenuObject: any;
  isActive:boolean = false;
  states:any = {};
  @Input() inputData;
  
  constructor() { 
    this.states.activeItem = 'ADMIN_DASHBOARD';
    this.roleMenuAccess1()
  }

  ngOnInit() {
  }
  menus() {
    return [
      {
        "id": 'DASHBOARD',
        "name": "Dashboard",
        "link": "/dashboard",
        "icon": "admin_dashboard"
       },
      {
        "id": 'PROFILES',
        "name": "Profile",
        "link": "/profile",
        "icon": "profile"
      },
      {
        "id": 'EMPLOYEE',
        "name": "Registration",
        "link": "/internalregistration",
        "icon": "profile"
      },
      {
        "id": 'WALKIN',
        "name": "All Walkin List",
        "link": "/walkin-list",
        "icon": "reports"
      }
    ]
  }
  
  roleMenuAccess1() {
    this.menuList = [];
      this.menus().forEach( (item) => {
            this.menuList.push(item);
      })
  }
  logout(){
  }
  navigate(item) {
    this.activeMenuObject = item.name;
  }
}

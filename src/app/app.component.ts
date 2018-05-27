import { Component,HostListener,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  menuLetter: string = 'A';
  navMode = 'side';
  showMenu = true;
  username : String;
  concatString : any = '';
  menuList: any[] = [];
  title = 'Tour of Heroes';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
        if (event.target.innerWidth < 768) {
            this.navMode = 'over';
            if( this.sidenav){
              this.sidenav.close();
            }
           
        }
        if (event.target.innerWidth > 768) {
           this.navMode = 'side';
           if(this.sidenav){
            this.sidenav.open();
           }
          
        }
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'sidenav',
  templateUrl: './my-sidenav.component.html',
  styleUrls: ['./my-sidenav.component.scss'],
})
export class MySidenavComponent implements OnInit {
  @ViewChild('sidenav') set sidenav(sideNav: MatSidenav) {
    console.log('ghinion start');
    if (sideNav && !this.isRenderingMenu) {
      this.sidenav = sideNav;
    } else {
      console.log('ghinion');
    }
  }
  isOpened = false;
  isRenderingMenu = false;

  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.isRenderingMenu = !this.isRenderingMenu;
    this.isOpened = ! this.isOpened;
    if(this.sidenav){
    this.sidenav.toggle();
    }
  }
}

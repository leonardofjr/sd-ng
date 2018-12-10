import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-primary-menu',
  templateUrl: './primary-menu.component.html',
  styleUrls: ['./primary-menu.component.scss']
})
export class PrimaryMenuComponent implements OnInit {
  servicesMenu = require('../../../pages/services/content.json').menu;
  constructor() { }

  ngOnInit() {
    console.log(this.servicesMenu);
  }

}

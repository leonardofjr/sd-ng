import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-services-menu',
  templateUrl: './services-menu.component.html',
  styleUrls: ['./services-menu.component.scss']
})
export class ServicesMenuComponent implements OnInit {
  content = require('../../../pages/services/content.json');

  constructor() { }

  ngOnInit() {
  }

}

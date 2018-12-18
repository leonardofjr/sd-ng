import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  dataSource = require('../../../../../work_table.json').post;
  data = [];
  constructor() { }

  ngOnInit() {
    this.filterData();
    console.log(this.data);
  }

  filterData() {
    this.dataSource.forEach((a, i) => {
      if (a["service_type"] === "logo")
        this.data.push(a);
    })
  }
}

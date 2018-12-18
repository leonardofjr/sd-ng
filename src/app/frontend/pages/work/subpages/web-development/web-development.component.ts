import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent implements OnInit {
  dataSource = require('../../../../../work_table.json').post;
  data = [];
  constructor() { }

  ngOnInit() {
    this.filterData();
  }

  filterData() {
    this.dataSource.forEach((a, i) => {
       if (a["service_type"] === "web-development")
        this.data.push(a);
    })
  }

}

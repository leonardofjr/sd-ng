import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  dataSource = require('../../../../../work_table.json').post;
  data = [];
  constructor() { }

  ngOnInit() {
    this.filterData();
  }

  filterData() {
    this.dataSource.forEach((a, i) => {
      if (a["service_type"] === "graphic-design")
        this.data.push(a);
    })
  }
}

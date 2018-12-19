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
    this.data = this.shuffle(this.data);
  }

  filterData() {
    this.dataSource.forEach((a, i) => {
       if (a["service_type"] === "web-development")
        this.data.push(a);
    })
  }

  shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

}

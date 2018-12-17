import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  data = require('./work_table.json').post;
  selected = "web-development";
  constructor() { }

  ngOnInit() {
  }

  changeSelectedValue(e) {
    this.selected = e;  
    console.log(this.selected);
  }

}

import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  data = require('./work_table.json').post;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}

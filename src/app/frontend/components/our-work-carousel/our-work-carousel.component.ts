import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../../functions.service';
declare var require: any;

@Component({
  selector: 'app-our-work-carousel',
  templateUrl: './our-work-carousel.component.html',
  styleUrls: ['./our-work-carousel.component.scss']
})
export class OurWorkCarouselComponent implements OnInit {
  constructor(private functions: FunctionsService) { }
  dataSource = require('../../../work_table.json').post;
  data = [];

  ngOnInit() {
    this.filterData();

  }

  ngAfterViewInit() {
    this.functions.run();

  }

  filterData() {
    this.dataSource.forEach((a, i) => {
        this.data.push(a);
    });
  }
}
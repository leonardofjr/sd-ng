import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../../functions.service';
import { PortfolioService } from 'src/app/portfolio.service';
declare var require: any;

@Component({
  selector: 'app-our-work-carousel',
  templateUrl: './our-work-carousel.component.html',
  styleUrls: ['./our-work-carousel.component.scss']
})
export class OurWorkCarouselComponent implements OnInit {
  constructor(private functions: FunctionsService, private portfolio: PortfolioService) { }
  data = require('../../../work_table.json').post;

  ngOnInit() {
    this.data = this.portfolio.shuffle(this.data);
  }

  ngAfterViewInit() {
    this.functions.run();

  }

}


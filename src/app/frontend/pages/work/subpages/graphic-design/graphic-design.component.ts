import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../../../portfolio.service';
declare var require: any;

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  constructor(private portfolio : PortfolioService) { }
  data;

  ngOnInit() {
    this.data = this.portfolio.filterData('graphic-design');
    this.data = this.portfolio.shuffle(this.data);
  }
}
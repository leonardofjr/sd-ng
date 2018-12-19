import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../../../portfolio.service';
declare var require: any;

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent implements OnInit {

  constructor(private portfolio : PortfolioService) { }
  data;

  ngOnInit() {
    this.data = this.portfolio.filterData('web-development');
    this.data = this.portfolio.shuffle(this.data);
  }
}

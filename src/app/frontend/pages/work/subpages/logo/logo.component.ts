import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../../../portfolio.service';
declare var require: any;

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private portfolio : PortfolioService) { }
  data;

  ngOnInit() {
    this.data = this.portfolio.filterData('logo');
    this.data = this.portfolio.shuffle(this.data);
  }
}


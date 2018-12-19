import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  servicesMenu = require('../../../frontend/pages/services/content.json').menu;
  companyProfile = require('../../../company-profile.json');
  date = new Date();
  year = this.date.getFullYear();

  constructor() { }

  ngOnInit() {
  }

}

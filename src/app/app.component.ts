import { Component, OnInit } from '@angular/core';
import { FunctionsService } from './functions.service';
import { User } from './User';
import { Router } from '@angular/router';

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  servicesMenu = require('./frontend/pages/services/content.json').menu;
  companyProfile = require('./company-profile.json');
  user: User;
  date = new Date();
  year = this.date.getFullYear();

  constructor(private router : Router, private functions: FunctionsService) {}

  ngOnInit() {

  }

}



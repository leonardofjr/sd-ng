import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
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

  constructor(private router : Router) {}

  ngOnInit() {

  }

  scrollToTop(event) {
    // We will scroll to the top of the page 
    window.scroll(0,0);
    
  }
}



import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var require:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  companyProfile = require("src/app/company-profile.json");
  currentRoute;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url; 
  }

}

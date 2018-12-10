import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  companyProfile = require('src/app/company-profile.json');

  constructor() { }

  ngOnInit() {
  }

}

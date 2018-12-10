import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { User } from './User';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  servicesMenu = require('./frontend/pages/services/content.json').menu;
  companyProfile = require('./company-profile.json');

  title = 'isa-ng';
  company_name = "ISA"
  user: User;
  date = new Date();
  year = this.date.getFullYear();

//  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log(this.companyProfile)
//    this.http.get<User>('http://localhost:8000/auth').subscribe(data => {
   //   console.log(data);
    //  this.user = data;
   // })
  }
}

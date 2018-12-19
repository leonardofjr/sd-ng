import { Injectable } from '@angular/core';
declare var require: any;
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  dataSource = require('./work_table.json').post;
  constructor() { }

  filterData(filterByServiceType) {
    let data = [];

    this.dataSource.forEach((a, i) => {
       if (a["service_type"] === filterByServiceType) {
          data.push(a);
        }
      })
    return data;
  }

  shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }
}

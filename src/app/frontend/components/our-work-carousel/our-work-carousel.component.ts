import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../../functions.service';

@Component({
  selector: 'app-our-work-carousel',
  templateUrl: './our-work-carousel.component.html',
  styleUrls: ['./our-work-carousel.component.scss']
})
export class OurWorkCarouselComponent implements OnInit {
  constructor(private functions: FunctionsService) { }
  
  ngOnInit() {
    this.functions.run();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { WebDevelopmentComponent } from './subpages/web-development/web-development.component';
import { GraphicDesignComponent } from './subpages/graphic-design/graphic-design.component';
import { LogoComponent } from './subpages/logo/logo.component';


@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  declarations: [
    WorkComponent,
    WebDevelopmentComponent,
    GraphicDesignComponent,
    LogoComponent,
  ]
})
export class WorkModule { }

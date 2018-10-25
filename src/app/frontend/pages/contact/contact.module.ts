import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

import { SharedModule } from '../../../shared.module';
@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }

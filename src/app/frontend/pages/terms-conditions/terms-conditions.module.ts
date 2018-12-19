import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsConditionsComponent } from './terms-conditions.component';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TermsConditionsRoutingModule
  ],
  declarations: [TermsConditionsComponent]
})
export class TermsConditionsModule { }

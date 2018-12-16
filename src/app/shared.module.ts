import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './frontend/components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RecaptchaModule.forRoot()

  ],
  declarations: [
    ContactFormComponent
  ],
  exports: [
    ContactFormComponent
  ]
})
export class SharedModule { }

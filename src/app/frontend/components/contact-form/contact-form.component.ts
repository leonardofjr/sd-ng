import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Location } from '@angular/common';
import { Form } from './Form';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, finalize } from 'rxjs/operators';
import { MailService } from '../../../mail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: Form;
  constructor(private http: HttpClient, private mailService: MailService, private location: Location, private router : Router) { }
  submit:boolean = false;
  ngOnInit() {

  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  disableButton(element) {
    document.getElementById(element).setAttribute('disabled', '');
  }

  onSubmit(e, formData) {
      e.preventDefault();
      //console.log(formData);
      this.mailService.sendMail(formData)
        .subscribe((data) => {
          this.router.navigateByUrl('');
          this.submit = true;
          this.disableButton('submitBtn')
        });
  }


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './frontend/pages/about/about.component';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { OurFeaturesComponent } from './frontend/pages/home/our-features/our-features.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { ContactFormComponent } from './frontend/components/contact-form/contact-form.component';
import { SliderComponent } from './frontend/components/slider/slider.component';
import { OurClientsComponent } from './frontend/pages/our-clients/our-clients.component';
import { CleaningGuaranteeComponent } from './frontend/pages/about/cleaning-guarantee/cleaning-guarantee.component';
import { ServiceAreasComponent } from './frontend/pages/service-areas/service-areas.component';
import { PrimaryMenuComponent } from './frontend/components/menus/primary-menu/primary-menu.component';
import { MobileMenuComponent } from './frontend/components/menus/mobile-menu/mobile-menu.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { FixedFreeQuoteFormComponent } from './frontend/components/fixed-free-quote-form/fixed-free-quote-form.component';
import { CallToActionComponent } from './frontend/components/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    OurFeaturesComponent,
    ContactComponent,
    ContactFormComponent,
    SliderComponent,
    OurClientsComponent,
    CleaningGuaranteeComponent,
    ServiceAreasComponent,
    PrimaryMenuComponent,
    MobileMenuComponent,
    KeepHtmlPipe,
    FixedFreeQuoteFormComponent,
    CallToActionComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

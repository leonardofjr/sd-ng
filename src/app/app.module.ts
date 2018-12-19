import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { OurFeaturesComponent } from './frontend/components/our-features/our-features.component';
import { SliderComponent } from './frontend/components/slider/slider.component';
import { PrimaryMenuComponent } from './frontend/components/menus/primary-menu/primary-menu.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { SharedModule } from './shared.module';
import { WebDesignComponent } from './frontend/pages/services/subpages/web-design/web-design.component';
import { WebDevelopmentComponent } from './frontend/pages/services/subpages/web-development/web-development.component';
import { MobileResponsiveDesignComponent } from './frontend/pages/services/subpages/mobile-responsive-design/mobile-responsive-design.component';
import { GraphicDesignComponent } from './frontend/pages/services/subpages/graphic-design/graphic-design.component';
import { StrategyScopeComponent } from './frontend/pages/services/subpages/strategy-scope/strategy-scope.component';
import { ServicesMenuComponent } from './frontend/components/menus/services-menu/services-menu.component';
import { OurWorkCarouselComponent } from './frontend/components/our-work-carousel/our-work-carousel.component';
import { BreadcrumbComponent } from './frontend/components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './frontend/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    OurFeaturesComponent,
    SliderComponent,
    PrimaryMenuComponent,
    KeepHtmlPipe,
    WebDesignComponent,
    WebDevelopmentComponent,
    MobileResponsiveDesignComponent,
    GraphicDesignComponent,
    StrategyScopeComponent,
    ServicesMenuComponent,
    OurWorkCarouselComponent,
    BreadcrumbComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

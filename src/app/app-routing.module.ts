import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/pages/home/home.component';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { WebDesignComponent } from './frontend/pages/services/subpages/web-design/web-design.component';
import { WebDevelopmentComponent } from './frontend/pages/services/subpages/web-development/web-development.component';
import { MobileResponsiveDesignComponent } from './frontend/pages/services/subpages/mobile-responsive-design/mobile-responsive-design.component';
import { GraphicDesignComponent } from './frontend/pages/services/subpages/graphic-design/graphic-design.component';
import { StrategyScopeComponent } from './frontend/pages/services/subpages/strategy-scope/strategy-scope.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: './frontend/pages/about/about.module#AboutModule' },
  { path: 'services', component: ServicesComponent, children: [
    { path: 'web-design', component: WebDesignComponent },
    { path: 'web-development', component: WebDevelopmentComponent },
    { path: 'mobile-responsive-design', component: MobileResponsiveDesignComponent },
    { path: 'graphic-design', component: GraphicDesignComponent },
    { path: 'strategy-scope', component: StrategyScopeComponent },
  ]},
  { path: 'work', loadChildren: './frontend/pages/work/work.module#WorkModule' },
  { path: 'contact', loadChildren: './frontend/pages/contact/contact.module#ContactModule' },
  { path: 'privacy-policy', loadChildren: './frontend/pages/privacy-policy/privacy-policy.module#PrivacyPolicyModule' },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule { }

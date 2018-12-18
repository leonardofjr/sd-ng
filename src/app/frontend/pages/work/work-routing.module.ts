import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work.component';
import { WebDevelopmentComponent } from './subpages/web-development/web-development.component';
import { GraphicDesignComponent } from './subpages/graphic-design/graphic-design.component';
import { LogoComponent } from './subpages/logo/logo.component';

const routes: Routes = [
  { path: '', component: WorkComponent, children: [
    { path: 'web-development', component: WebDevelopmentComponent },
    { path: 'graphic-design', component: GraphicDesignComponent },
    { path: 'logo', component: LogoComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }

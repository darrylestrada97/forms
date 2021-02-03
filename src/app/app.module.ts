import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing Forms Module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCountryComponent } from './form-country/form-country.component';
import { CompareCountryComponent } from './compare-country/compare-country.component';
import { FormPublishingComponent } from './form-publishing/form-publishing.component';
import { FormImprovementsComponent } from './form-improvements/form-improvements.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  //The next path is equivalent to http://localhost:4200/new-reservation
  { path: 'form-country' , component: FormCountryComponent},
  { path: 'form-compare-country' , component: CompareCountryComponent},
  { path: 'form-publishing' , component: FormPublishingComponent},
  //The next path is equivalent to http://localhost:4200
  { path: '' , component: AppComponent},
  //** is equivalent to different than before */
  { path: '**' , component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FormCountryComponent,
    CompareCountryComponent,
    FormPublishingComponent,
    FormImprovementsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

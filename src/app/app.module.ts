import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing Forms Module
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCountryComponent } from './form-country/form-country.component';
import { CompareCountryComponent } from './compare-country/compare-country.component';
import { FormPublishingComponent } from './form-publishing/form-publishing.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCountryComponent,
    CompareCountryComponent
    FormPublishingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

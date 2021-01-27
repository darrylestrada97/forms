import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing Forms Module
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormPublishingComponent } from './form-publishing/form-publishing.component';
=======
import { FormCountryComponent } from './form-country/form-country.component';
>>>>>>> 83e29d0856254874b9ac5917e6f2a574cae58f89

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FormPublishingComponent
=======
    FormCountryComponent
>>>>>>> 83e29d0856254874b9ac5917e6f2a574cae58f89
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

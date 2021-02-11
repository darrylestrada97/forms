import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing Forms Module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MatSelectCountryModule } from '@angular-material-extensions/select-country';

import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCountryComponent } from './form-country/form-country.component';
import { CompareCountryComponent } from './compare-country/compare-country.component';
import { FormPublishingComponent } from './form-publishing/form-publishing.component';
import { FormImprovementsComponent } from './form-improvements/form-improvements.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





=======
import { JournalsComponent } from './journals/journals.component';
import { CheckInputArrayDirective } from './directives/check-input-array.directive';
>>>>>>> 40179c90724ea3ddd440b2e98448a608d63d4b79


// const appRoutes: Routes = [
//   //The next path is equivalent to http://localhost:4200/form-country
//   { path: 'form-country' , component: FormCountryComponent},
//   { path: 'form-compare-country' , component: CompareCountryComponent},
//   { path: 'form-publishing' , component: FormPublishingComponent},
//   //The next path is equivalent to http://localhost:4200
//   { path: '' , component: AppComponent, pathMatch: 'full'},
//   //** is equivalent to different than before */
//   { path: '**' , component: PageNotFoundComponent}
// ];


@NgModule({
  declarations: [
    AppComponent,
    FormCountryComponent,
    CompareCountryComponent,
    FormPublishingComponent,
    FormImprovementsComponent,
    PageNotFoundComponent,
    HomeComponent,
    MenuComponent,
    JournalsComponent,
    CheckInputArrayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectCountryModule.forRoot('de'), // you can use en | de | it | es | fr --> MatSelectCountrySupportedLanguages
             HttpClientModule,
    RouterModule.forRoot([
        { path: 'form-country' , component: FormCountryComponent},
        { path: 'form-compare-country' , component: CompareCountryComponent},
        { path: 'form-publishing' , component: FormPublishingComponent},
        { path: 'form-improvements' , component: FormImprovementsComponent},
        { path: 'journal-search', component: JournalsComponent},
        { path: '', component: HomeComponent},
        //The next path is equivalent to http://localhost:4200
        
         //** is equivalent to different than before */
         { path: '**' , component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

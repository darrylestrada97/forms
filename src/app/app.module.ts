import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing Forms Module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCountryComponent } from './form-country/form-country.component';
import { CompareCountryComponent } from './compare-country/compare-country.component';
import { FormPublishingComponent } from './form-publishing/form-publishing.component';
import { FormImprovementsComponent } from './form-improvements/form-improvements.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';





import { JournalsComponent } from './journals/journals.component';
import { CheckInputArrayDirective } from './directives/check-input-array.directive';
import { CompareCountriesDirective } from './directives/compare-countries.directive';
import { VaccinationProgressComponent } from './vaccination-progress/vaccination-progress.component';
import { ImprovementsDirective } from './directives/improvements.directive';
import { CookieService } from 'ngx-cookie-service';

import { NgxPaginationModule } from 'ngx-pagination';

import { ToastrModule } from 'ngx-toastr';
import { ManageCompareComponent } from './manage-compare/manage-compare.component';
import { ManageVaccinationComponent } from './manage-vaccination/manage-vaccination.component';
import { FormCountryPagedComponent } from './form-country-paged/form-country-paged.component';
import { FormImprovementsPagedComponent } from './form-improvements-paged/form-improvements-paged.component';



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

let arr = [AppComponent,
  FormCountryComponent,
  FormCountryPagedComponent,
  CompareCountryComponent,
  FormPublishingComponent,
  FormImprovementsComponent,
  PageNotFoundComponent,
  HomeComponent,
  MenuComponent,
  JournalsComponent,
  CheckInputArrayDirective,
  CompareCountriesDirective,
  VaccinationProgressComponent,
  ImprovementsDirective,
]

@NgModule({
  declarations: [
    ...arr,
    ManageCompareComponent,
    ManageVaccinationComponent,
    FormImprovementsPagedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    MatCheckboxModule,
    MatSelectCountryModule.forRoot('en'), // you can use en | de | it | es | fr --> MatSelectCountrySupportedLanguages
             HttpClientModule,
    RouterModule.forRoot([
        { path: 'form-country' , component: FormCountryComponent},
        { path: 'form-country-paged' , component: FormCountryPagedComponent},
        { path: 'form-compare-country' , component: CompareCountryComponent},
        { path: 'manage-compare-country', component: ManageCompareComponent },
        { path: 'form-publishing' , component: FormPublishingComponent},
        { path: 'form-improvements' , component: FormImprovementsComponent},
        { path: 'form-improvements-paged' , component: FormImprovementsPagedComponent},
        
        { path: 'journal-search', component: JournalsComponent},
        { path: 'vaccination-progress', component: VaccinationProgressComponent },
        { path: 'vaccination', component: ManageVaccinationComponent },
        { path: '', component: HomeComponent},
        //The next path is equivalent to http://localhost:4200
        
         //** is equivalent to different than before */
         { path: '**' , component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

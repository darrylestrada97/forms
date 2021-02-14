import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';


@Component({
  selector: 'app-compare-country',
  templateUrl: './compare-country.component.html',
  styleUrls: ['./compare-country.component.css']
})


export class CompareCountryComponent implements OnInit {


  title = 'select-county';

  countryFormControl = new FormControl();
  countryFormGroup: FormGroup;

  private buildForm() {

  }
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {


    this.countryFormGroup = this.formBuilder.group({
      country: []
    });

    // this.countryFormGroup.get('country').valueChanges
    //   .subscribe(country => console
    //     .log( country));

    // this.countryFormControl.valueChanges.subscribe(country =>
    //    console.log(country));
  }


  onCountrySelected($event: Country) {
    console.log($event);
  }
  onCountrySelected2($event: Country) {
    console.log($event);
  }
}


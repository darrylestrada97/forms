import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';
import { compareCountries } from '../model/compareCountries';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';



@Component({
  selector: 'app-compare-country',
  templateUrl: './compare-country.component.html',
  styleUrls: ['./compare-country.component.css']
})


export class CompareCountryComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;

  objCompareCountries: compareCountries;
  title = 'select-county';
  firstCountry = "";
  secondCountry ="";
  searchDate="";


  variants = [
    {id: 1, name: 'Chinese'},
    {id: 2, name: 'British'},
    {id: 3, name: 'African'},
    {id: 4, name: 'Brazilian'}
  ]

  typeOfCases = [
    {id:1, type: 'active'},
    {id:2, type: 'death'},
    {id:3, type: 'survive'}
  ]

  countryFormControl = new FormControl();
  countryFormGroup: FormGroup;
  status: boolean;


  onItemChange($event){
    $event.srcElement.value == "Yes"? this.status = true : this.status = false
  }
  sendForm(){
    this.objCompareCountries.$firstCountry = this.firstCountry;
    this.objCompareCountries.$secondCountry = this.secondCountry;
    console.log(this.objCompareCountries);

  }

  private buildForm() {
  }
  constructor(private formBuilder: FormBuilder) {
    this.datePickerConfig = Object.assign({
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      minDate: new Date(2020,0,21),
      maxDate: new Date()
    });
  }
  ngOnInit(): void {
    this.objCompareCountries = new compareCountries("","","","","");
    this.countryFormGroup = this.formBuilder.group({
      country: []
    });
  }
  onCountrySelected($event: Country) {
    this.firstCountry = $event.name;
  }
  onCountrySelected2($event: Country) {
    this.secondCountry = $event.name;
  }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';



@Component({
  selector: 'app-compare-country',
  templateUrl: './compare-country.component.html',
  styleUrls: ['./compare-country.component.css']
})


export class CompareCountryComponent implements OnInit {


  title = 'select-county';
  firstCountry = "";
  secondCountry ="";


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
    console.log(this.firstCountry +" "+ this.secondCountry);
  }

  private buildForm() {

  }
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {


    this.countryFormGroup = this.formBuilder.group({
      country: []
    });

    this.countryFormGroup.get('country').valueChanges
      .subscribe(country => console
        .log( country));

    this.countryFormControl.valueChanges.subscribe(country =>
       console.log(country));
  }

  onCountrySelected($event: Country) {
    this.firstCountry = $event.name;
  }
  onCountrySelected2($event: Country) {
    this.secondCountry = $event.name;
  }
}


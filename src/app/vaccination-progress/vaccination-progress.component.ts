import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';
import {ThemePalette} from '@angular/material/core';
import { searchVaccine } from '../model/searchVaccine';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}




@Component({
  selector: 'app-vaccination-progress',
  templateUrl: './vaccination-progress.component.html',
  styleUrls: ['./vaccination-progress.component.css']
})
export class VaccinationProgressComponent implements OnInit {

  vacinnesProgress: searchVaccine;

  

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'AstraZeneca', completed: false, color: 'primary'},
      {name: 'SpunkV', completed: false, color: 'accent'},
      {name: 'Pfizer', completed: false, color: 'warn'},
      {name: 'Moderna', completed: false, color: 'warn'},
      {name: 'Sinovac', completed: false, color: 'warn'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  

  status: boolean = true;
  
  Phyzer = false;
  
  title = 'select-county';
  firstCountry = "All";
  
  countryFormControl = new FormControl();
  countryFormGroup: FormGroup;
 


  onItemChange($event){
    $event.srcElement.value == "All"? this.status = true : this.status = false;
    

  }


  
  sendForm(){
    let vaccine = this.task.subtasks;
    // console.log(this.firstCountry);
    // console.log(vaccine);
    this.vacinnesProgress.country = this.firstCountry;
    this.vacinnesProgress.vaccine = vaccine;
    console.log(this.vacinnesProgress);
  }

  private buildForm() {
  }
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.vacinnesProgress = new searchVaccine("","");
    this.countryFormGroup = this.formBuilder.group({
      country: []
    });
  }
  onCountrySelected($event: Country) {
    this.firstCountry = $event.name;
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Improvements } from '../model/improvements';


@Component({
  selector: 'app-form-improvements',
  templateUrl: './form-improvements.component.html',
  styleUrls: ['./form-improvements.component.css']
})
export class FormImprovementsComponent implements OnInit {

  improvObj: Improvements;

  name = 'Angular 6';
  marked = false;
  theCheckbox = false;

  constructor() { }


  ngOnInit(): void {
    this.improvObj = new Improvements(0,"","",0,"");
  }

  submitted = false;

  onSubmit(){
    this.submitted = true;
    
    console.log(this.improvObj);
  }
  toggleVisibility(e){
    this.marked= e.target.checked;
  }
  
}

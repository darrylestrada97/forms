import { Component, OnInit } from '@angular/core';
import { Improvements } from '../model/improvements';

@Component({
  selector: 'app-form-improvements',
  templateUrl: './form-improvements.component.html',
  styleUrls: ['./form-improvements.component.css']
})
export class FormImprovementsComponent implements OnInit {

  

  improvObj: Improvements;



  constructor() { }


  ngOnInit(): void {
    this.improvObj = new Improvements(0,"","",0,"");
  }

  submitted = false;

  onSubmit(){
    this.submitted = true;
    
    console.log(this.improvObj);
  }

  status:boolean;

  onItemChange($event){
    $event.srcElement.value == "Yes"? this.status = true : this.status = false
  }
}


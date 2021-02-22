import { Component, OnInit } from '@angular/core';
import { Improvements } from '../model/improvements';
import {ThemePalette} from '@angular/material/core';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-form-improvements',
  templateUrl: './form-improvements.component.html',
  styleUrls: ['./form-improvements.component.css']
})
export class FormImprovementsComponent implements OnInit {

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'improve every aspect of the website', completed: false, color: 'primary'},
      {name: 'improve css layout', completed: false, color: 'accent'},
      {name: 'improve Angular layout', completed: false, color: 'warn'},
      {name: 'improve model layout', completed: false, color: 'warn'},
      {name: 'improve ngForm layout', completed: false, color: 'warn'}
    ]
  };


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
  



  status:boolean;

  onItemChange($event){
    $event.srcElement.value == "Yes"? this.status = true : this.status = false
  }
}


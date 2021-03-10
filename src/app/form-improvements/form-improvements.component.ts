import { Component, OnInit } from '@angular/core';
import { Improvements } from '../model/improvements';
import {ThemePalette} from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';
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
  cookieObj: any;
  constructor( private cookieService: CookieService) { }


  ngOnInit(): void {
    this.improvObj = new Improvements(0,"","","","");
    this.getCookie();
  }

  submitted = false;

  onSubmit(){
    this.cookieService.set("improve", JSON.stringify(this.improvObj));
    console.log("Saving following Cookie: ", this.cookieService.get("improve"))

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

       /**
   * Date: 03/11/2021
   * Author: Luis.
   * 
   * 
   * This function gets the cookies and assigns them to the main object.
   */  
  getCookie(){
    if(this.cookieService.check("improve")){
      this.cookieObj = JSON.parse(this.cookieService.get("improve"));
      Object.assign(this.improvObj, this.cookieObj);
      console.log("Last Cookie saved: ", this.cookieObj)
    }else{
      console.log("No Cookie saved")
    }
  }

      /**
   * Date: 03/11/2021
   * Author: Luis.
   * 
   * 
   * This function delete the cookie.
   */  
  killCookie(){
    this.cookieService.delete("improve");
  }
}


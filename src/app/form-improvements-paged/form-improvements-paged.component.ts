import { Component, OnInit } from '@angular/core';
import { Improvements } from '../model/improvements';
import { FormImprovementsService } from '../services/form-improvements.service';

@Component({
  selector: 'app-form-improvements-paged',
  templateUrl: './form-improvements-paged.component.html',
  styleUrls: ['./form-improvements-paged.component.css']
})
export class FormImprovementsPagedComponent implements OnInit {

  task = [
      {name: 'improve every aspect of the website', completed: false, color: 'primary'},
      {name: 'improve css layout', completed: false, color: 'accent'},
      {name: 'improve Angular layout', completed: false, color: 'warn'},
      {name: 'improve model layout', completed: false, color: 'warn'},
      {name: 'improve ngForm layout', completed: false, color: 'warn'}
    ]
  ;

  currentPage: number;
  itemsPerPage: number;

  improvement: Improvements[]=[];
  improvementsFiltered: Improvements[]=[];

  improvementSelected: Improvements;

  constructor(private formimprovementsService: FormImprovementsService) { 
  }

  ngOnInit() {
    this.improvement = this.formimprovementsService.
    generateImprovementsRandom();
    //The array is cloned by means of the Object.assign method
    //because if we do it by the "=" operator, the copy is made by reference.
    Object.assign(this.improvementsFiltered, this.improvement);

    this.itemsPerPage=10;
    this.currentPage=1;
  }

  commentsFilter: String;
  locationFilter: String;
  evaluationFilter: String;
  recomendationFilter: String;
 

     /**
   * Date: 03/11/2021
   * Author: Luis.
   * 
   * 
   * this function filters data that the user gives
   */  
  filter(){
    this.improvementsFiltered = this.improvement.
      filter(fil => {
        let commentsValid: boolean = false;
        let locationValid: boolean = false;
        let evaluationVaild: boolean = false;
        let recomendationVaild: boolean = false;


        
        if(this.commentsFilter && this.commentsFilter != ''){
          if(fil.$comments.toLowerCase().indexOf(this.commentsFilter.toLowerCase()) != -1){
            commentsValid = true;
          }
        }else{
          commentsValid = true;
        }

        if(this.locationFilter && this.locationFilter != ''){
          if(fil.$location.toLowerCase().indexOf(this.locationFilter.toLowerCase()) != -1){
            locationValid = true;
          }
        }else{
          locationValid = true;
        }

        if(this.evaluationFilter && this.evaluationFilter != ''){
          if(fil.$evaluation.toLowerCase().indexOf(this.evaluationFilter.toLowerCase()) != -1){
            evaluationVaild = true;
          }
        }else{
          evaluationVaild = true;
        }
        if(this.recomendationFilter && this.recomendationFilter != ''){
          if(fil.$recomendation.toLowerCase().indexOf(this.recomendationFilter.toLowerCase()) != -1){
            recomendationVaild = true;
          }
        }else{
          recomendationVaild = true;
        }

        return  commentsValid && locationValid && evaluationVaild && recomendationVaild;

    })

  }

  onClick(rv: Improvements){
    this.improvementSelected = rv;
  }
     /**
   * Date: 03/11/2021
   * Author: Luis.
   * 
   * 
   * this function removes a data from the page
   */  
  removeRes(rv: Improvements){
    this.improvement.splice
      (this.improvement.indexOf(rv),1);
    this.improvementsFiltered.splice
      (this.improvementsFiltered.indexOf(rv),1);
  }
}



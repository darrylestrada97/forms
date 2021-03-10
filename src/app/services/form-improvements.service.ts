import { Injectable } from '@angular/core';
import { Improvements } from '../model/improvements';

@Injectable({
  providedIn: 'root'
})
export class FormImprovementsService {

  task = [
    {name: 'improve every aspect of the website', completed: false, color: 'primary'},
    {name: 'improve css layout', completed: false, color: 'accent'},
    {name: 'improve Angular layout', completed: false, color: 'warn'},
    {name: 'improve model layout', completed: false, color: 'warn'},
    {name: 'improve ngForm layout', completed: false, color: 'warn'}
  ]
;

  constructor() { }

     /**
   * Date: 03/11/2021
   * Author: Luis.
   * 
   * 
   * this function generates an random array of Improvements components. 
   */  
  generateImprovementsRandom(): Improvements[]{
    let improvements: Improvements[]=[];

    let randoncomments: string;
    let randomlocation="";
    let randomevaluation: string;
    let randomrecomendation: string;
    let Improvement: Improvements;

    for(let i=0; i<369; i++){
      if(i%5==0){
        randoncomments = "very good page";
      }else{
        randoncomments = "I did not like it";
      }
      randomevaluation=Object.entries(this.task)[Math.floor(Math.random()*(this.task.length))][1].name;
      if(i%5==0){
        randomrecomendation = "Yes";
      }else{
        randomrecomendation = "No";
      }
      
      Improvement = new Improvements (i,randoncomments,randomlocation,randomevaluation,randomrecomendation);
 
      improvements.push(Improvement);
     }
    return improvements;
  }


}

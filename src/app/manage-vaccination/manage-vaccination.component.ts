 /**
   * Date: 03/11/2021
   * Version: 1.2
   * Author: Darryl.
   * 
   * 
   * this script controls the paging and the filter of the list. 
   */

import { Component, OnInit } from '@angular/core';
import { VaccinationProgressService } from '../services/vaccination-progress.service'
import {  searchVaccine } from '../model/searchVaccine';
@Component({
  selector: 'app-manage-vaccination',
  templateUrl: './manage-vaccination.component.html',
  styleUrls: ['./manage-vaccination.component.css']
})
export class ManageVaccinationComponent implements OnInit {

  constructor(private vaccionationProgressService: VaccinationProgressService) { }

  variants = [
    {id: 1, name: 'AstraZeneca'},
    {id: 2, name: 'SpunkV'},
    {id: 3, name: 'Pfizer'},
    {id: 4, name: 'Moderna'},
    {id: 5, name: 'Sinovac'},
  ]

  //Pagination properties
  currentPage: number;
  itemsPerPage: number;

  searchVaccines: searchVaccine[]=[];
  searchVaccinesFiltered: searchVaccine[]=[];
  searchVaccinesSelected: searchVaccine;
  strainFiltered = "AstraZeneca";
  countryFilter: string = "";


  ngOnInit(): void {

    this.searchVaccines = this.vaccionationProgressService.generateRandonVaccination();
    Object.assign(this.searchVaccinesFiltered, this.searchVaccines);
    this.itemsPerPage=10;
    this.currentPage=1;
    this.strainFiltered="AstraZeneca";
  }
  /**
   * Date: 03/11/2021
   * Version: 1.2
   * Author: Darryl.
   * 
   * This function filters the incoming data with the stored data and returns the a list of objects that match the given values.
   */

  filter(){
    this.searchVaccinesFiltered = this.searchVaccines.
      filter(compare => {
        let validVaccine: boolean = false;
        let countryValid: boolean = false;

        
        for(let i = 0; i<= 4; i++){
          if(compare.vaccine.subtasks[i].name == this.strainFiltered && compare.vaccine.subtasks[i].completed == true){
            validVaccine = true;
            
          }
        }
       
        // IndexOf: Returns the position of the 
        // first occurrence of a substring.
        // Otherwise returns -1
        if(this.countryFilter && this.countryFilter!=""){
          if(compare.country.toLowerCase().indexOf
          (this.countryFilter.toLowerCase())!=-1){
            countryValid=true;
          }
        }else{
          countryValid=true;
        }
        
        return countryValid && validVaccine ;

      })
  }
   /**
   * Date: 03/11/2021
   * Version: 1.2
   * Author: Darryl.
   * 
   * the the function is called, it assigns the incoming variable to the main variable of the form. 
   */
  onClick(cc: searchVaccine){
    this.searchVaccinesSelected = cc;
  }

  /**
   * Date: 03/11/2021
   * Version: 1.2
   * Author: Darryl.
   * 
   * Deletes a row of the list.
   */

  removeRes(cc: searchVaccine){
    this.searchVaccines.splice
      (this.searchVaccines.indexOf(cc),1);
    this.searchVaccinesFiltered.splice
      (this.searchVaccinesFiltered.indexOf(cc),1);
  }

}

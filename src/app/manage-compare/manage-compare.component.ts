 /**
   * Date: 03/11/2021
   * Version: 1.2
   * Author: Darryl.
   * 
   * 
   * this script controls the paging and the filter of the list. 
   */


import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { compareCountries } from '../model/compareCountries';
import { CompareCountryService } from '../services/compare-country.service';



@Component({
  selector: 'app-manage-compare',
  templateUrl: './manage-compare.component.html',
  styleUrls: ['./manage-compare.component.css']
})
export class ManageCompareComponent implements OnInit {
  strainFilter: number = 0;
  caseTypeFilter: number = 0;
  countryFilter: string = "";





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

  strainFiltered = "Chinese";

  //Pagination properties
  currentPage: number;
  itemsPerPage: number;
  compares: compareCountries[]=[];
  comparesFiltered: compareCountries[]=[];
  compareSelected: compareCountries;

  constructor(private compareCountryService: CompareCountryService) { }

  ngOnInit(): void {
    this.compares = this.compareCountryService.generateCompareCountry();
    Object.assign(this.comparesFiltered, this.compares);

    this.strainFilter=1;
    this.itemsPerPage=10;
    this.currentPage=1; 
  }

   /**
   * Date: 03/11/2021
   * Version: 1.2
   * Author: Darryl.
   * 
   * This function filters the incoming data with the stored data and returns the a list of objects that match the given values.
   */

  filter(){
    console.log("entro en el filter");
    this.comparesFiltered = this.compares.
      filter(compare => {
        let strainValid: boolean = false;
        let countryValid: boolean = false;

        strainValid = ( compare.strain == this.strainFiltered);
        console.log(strainValid+"-"+compare.strain+"-"+this.strainFiltered);
        // IndexOf: Returns the position of the 
        // first occurrence of a substring.
        // Otherwise returns -1
        if(this.countryFilter && this.countryFilter!=""){
          if(compare.firstCountry.toLowerCase().indexOf
          (this.countryFilter.toLowerCase())!=-1 || compare.secondCountry.toLowerCase().indexOf
          (this.countryFilter.toLowerCase())!=-1 ){
            countryValid=true;
          }
        }else{
          countryValid=true;
        }
        
        return countryValid && strainValid ;

      })
  }

  /**
   * Date: 03/11/2021
   * Version: 1.2
   * Author: Darryl.
   * 
   * the the function is called, it assigns the incoming variable to the main variable of the form. 
   */

  onClick(cc: compareCountries){
    this.compareSelected = cc;
  }

   /**
   * Date: 03/11/2021
   * Version: 1.2
   * Author: Darryl.
   * 
   * Deletes a row of the list.
   */


  removeRes(cc: compareCountries){
    this.compares.splice
      (this.compares.indexOf(cc),1);
    this.comparesFiltered.splice
      (this.comparesFiltered.indexOf(cc),1);
  }

}

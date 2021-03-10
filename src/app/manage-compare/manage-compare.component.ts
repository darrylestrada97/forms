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

  filter(){
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
          (this.countryFilter.toLowerCase())!=-1){
            countryValid=true;
          }
        }else{
          countryValid=true;
        }
        
        return countryValid && strainValid ;

      })
  }

  onClick(cc: compareCountries){
    this.compareSelected = cc;
  }

  removeRes(cc: compareCountries){
    this.compares.splice
      (this.compares.indexOf(cc),1);
    this.comparesFiltered.splice
      (this.comparesFiltered.indexOf(cc),1);
  }

}

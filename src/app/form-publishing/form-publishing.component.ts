import { Component, OnInit } from '@angular/core';
import { Search } from '../model/search';

import { CookieService } from 'ngx-cookie-service';
import { RandomService } from '../services/random.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-publishing',
  templateUrl: './form-publishing.component.html',
  styleUrls: ['./form-publishing.component.css']
})
export class FormPublishingComponent implements OnInit {
  cookieObj: any;
  constructor( private cookieService: CookieService, private random: RandomService, private toastr: ToastrService ) { }

  objSearch: Search;
  publicationTitle: String;
  //Pagination properties
  currentPage: number;
  itemsPerPage: number;
  newItemsPerPage: number;
  publicationSelected: Search;
  randomPublications = []

  /*
  sentence() {
    var nouns,verbs,adjectives;

    nouns = ["thermodynamics", "genomic", "temperature", "plastic", "geology", "sea investigation", "tectonic plates", "professor", "stratosphere"];
    verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept"];
    adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating"];

    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);

    this.publicationTitle = "The " + verbs[rand1] + " " + adjectives[rand2] +  " " + nouns[rand3] + ".";
    return this.publicationTitle
  };*/

    //sentence();
    

  Journals = [
    {name: 'Nature', price: 12.50, distribution: "online"},
    {name: 'Science', price: 13.25, distribution: "paper"},
    {name: 'Astronomical Journal', price: 29.99, distribution: "online"},
    {name: 'Astrophysical Journal', price: 24.20, distribution: "paper"},
    {name: 'Canadian Journal of Chemistry', price: 18.75, distribution: "online"}
  ]

  fields = ['Biology', 'Physics', 'Biotechnology', 'Genomics', 'Pharmaceutical', "Life"]

  JournalsObj = [];

  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  
  ngOnInit(): void {
    (document.getElementsByClassName('content')[0] as HTMLElement).style.display = 'block';
    (document.getElementsByClassName('content')[1] as HTMLElement).style.display = 'none';
    this.objSearch = new Search(0,"","","",0,"","");
    this.getCookie();
    //this.priceFilter=500;
    this.randomPublications = this.random.generateRandomPublications()
    this.searchFiltered = this.randomPublications;
    this.itemsPerPage=10;
    this.currentPage=1;
    
  }

  submitted = false;
  
  onSubmit(){
    this.Journals.forEach(element => {
      if(element.name == this.objSearch.$journal){
        this.objSearch.$price=element.price;
        this.objSearch.$distribution=element.distribution;
      }
      this.objSearch.$publicationTitle=this.random.sentence();
    });

    this.cookieService.set("Search", JSON.stringify(this.objSearch), 30, '/form-publishing');

    console.log(this.cookieService.get("Search"))
    //console.log(this.cookieService.get("Search"));
    this.submitted = true;

  }

  textInput: String;
  statusArray: boolean = false;
  statusAuthor: boolean = false;
  globalStatus: boolean = false;
  changeInput($event){

      this.textInput = $event.srcElement.value;
      var inputArr = this.textInput.split(" ").filter(function(entry) { 
                                                        return entry.trim() != ''; 
                                                      });                               
      let aux = inputArr.map(function(entry){
        return entry.split("").map(function(x){
          return !/^[^a-zA-Z0-9]*$/.test(x)? true : false
        })  
      })
      this.statusArray = aux.toString().split(",").includes("false")? true : false

      this.globalStatus = this.statusArray? false : true

    return this.statusArray

  }

  changeInputInvestigation($event){
    this.globalStatus = this.fields.indexOf($event.srcElement.value) == -1 ? false : true
  }

  getCookie(){
    if(this.cookieService.check("Search")){
      this.cookieObj = JSON.parse(this.cookieService.get("Search"));

      Object.assign(this.objSearch, this.cookieObj);


    }else{
      console.log("no cookie")
    }
  }

  allPublication(){
    (document.getElementsByClassName('content')[0] as HTMLElement).style.display = 'none';
    (document.getElementsByClassName('content')[1] as HTMLElement).style.display = 'block';
  }

  killCookie(){
    this.cookieService.get("Search")? this.cookieService.delete("Search", '/form-publishing') : null
  }

  searchFiltered: Search[]
  journalFilter: String;
  fieldFilter: String;
  authorFilter: String;
  priceFilter = 90;
  distributionFilter: String;

  filter(){
    this.searchFiltered = this.randomPublications.
      filter(elem => {
        let journalNameValid: boolean = false;
        let fieldValid: boolean = false;
        let authorValid: boolean = false;
        let priceValid: boolean = false;
        let distributionValid: boolean = false;

        priceValid = elem.$price <= this.priceFilter ? true : false

        if(this.authorFilter && this.authorFilter != ""){
          if(elem.$author.toLowerCase().indexOf(this.authorFilter.toLowerCase()) != -1){
            authorValid = true;
          }
        }else{
          authorValid = true;
        }

        if(this.distributionFilter && this.distributionFilter != ""){
          if(elem.$distribution.toLowerCase().indexOf(this.distributionFilter.toLowerCase()) != -1){
            distributionValid = true;
          }
        }else{
          distributionValid = true;
        }

        if(this.journalFilter && this.journalFilter != ''){
          if(elem.$journal.toLowerCase().indexOf(this.journalFilter.toLowerCase()) != -1){
            journalNameValid = true;
          }
        }else{
          journalNameValid = true;
        }

        if(this.fieldFilter && this.fieldFilter != ''){
          if(elem.$field.toLowerCase().indexOf(this.fieldFilter.toLowerCase()) != -1){
            fieldValid = true;
          }
        }else{
          fieldValid = true;
        }


        return journalNameValid && fieldValid && priceValid && authorValid && distributionValid;

    })

  }

  changeItemsPerPage($event){
    this.itemsPerPage = $event.srcElement.value != 'all' ? $event.srcElement.value : this.randomPublications.length;
    return(console.log($event.srcElement.value))
  }

  removePub(search){
    this.randomPublications.splice
      (this.randomPublications.indexOf(search),1);
    this.searchFiltered.splice
      (this.searchFiltered.indexOf(search),1);
  }

  goTo(search){
    (document.getElementsByClassName('content')[0] as HTMLElement).style.display = 'block';
    (document.getElementsByClassName('content')[1] as HTMLElement).style.display = 'none';
    this.publicationSelected = search;

    this.objSearch.$journal = search.$journal;
    this.objSearch.$keyWords = search.$publicationTitle;
    this.objSearch.$field = search.$field;
    this.objSearch.$author = search.$author;

  }


  
}

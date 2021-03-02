import { Component, OnInit } from '@angular/core';
import { Search } from '../model/search';

import { CookieService } from 'ngx-cookie-service';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'app-form-publishing',
  templateUrl: './form-publishing.component.html',
  styleUrls: ['./form-publishing.component.css']
})
export class FormPublishingComponent implements OnInit {
  cookieObj: any;
  constructor( private cookieService: CookieService, private random: RandomService ) { }

  objSearch: Search;
  publicationTitle: String;
  //Pagination properties
  currentPage: number;
  itemsPerPage: number;
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
    {name: 'Nature', price: "12.50", distribution: "online"},
    {name: 'Science', price: "13.25", distribution: "paper"},
    {name: 'Astronomical Journal', price: "29.99", distribution: "online"},
    {name: 'Astrophysical Journal', price: "24.20", distribution: "paper"},
    {name: 'Canadian Journal of Chemistry', price: "18.75", distribution: "online"}
  ]

  fields = ['Biology', 'Physics', 'Biotechnology', 'Genomics', 'Pharmaceutical', "Life"]

  JournalsObj = [];
  
  ngOnInit(): void {
    (document.getElementsByClassName('content')[1] as HTMLElement).style.display = 'none';
    this.objSearch = new Search(0,"","","","","","");
    this.getCookie();
    //this.cookieService.delete("Search");
  }

  submitted = false;
  randomPublications = []
  onSubmit(){
    this.Journals.forEach(element => {
      if(element.name == this.objSearch.$journal){
        this.objSearch.$price=element.price;
        this.objSearch.$distribution=element.distribution;
      }
      this.objSearch.$publicationTitle=this.random.sentence();
    });
    this.cookieService.set("Search", JSON.stringify(this.objSearch), 30);
    console.log(this.cookieService.get("Search"));
    this.randomPublications = this.random.generateRandomPublications()

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
    console.log(this.fields.indexOf($event.srcElement.value))
    this.globalStatus = this.fields.indexOf($event.srcElement.value) == -1 ? false : true
  }

  getCookie(){
    if(this.cookieService.check("Search")){
      this.cookieObj = JSON.parse(this.cookieService.get("Search"));

      Object.assign(this.objSearch, this.cookieObj);

      //console.log(this.objSearch)

    }else{
      console.log("no cookie")
    }
  }

  allPublication($event){

    (document.getElementsByClassName('content')[0] as HTMLElement).style.display = 'none';
    (document.getElementsByClassName('content')[1] as HTMLElement).style.display = 'block';


  }


  
}

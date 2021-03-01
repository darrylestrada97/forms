import { Component, OnInit } from '@angular/core';
import { Search } from '../model/search';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-form-publishing',
  templateUrl: './form-publishing.component.html',
  styleUrls: ['./form-publishing.component.css']
})
export class FormPublishingComponent implements OnInit {
  cookieObj: any;
  constructor( private cookieService: CookieService ) { }

  objSearch: Search;
  publicationTitle: String;
  sentence() {
    var nouns,verbs,adjectives;

    nouns = ["thermodynamics", "genomic", "temperature", "plastic", "geology", "sea investigation", "tectonic plates", "professor", "stratosphere"];
    verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept"];
    adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating"];

    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    //                var randCol = [rand1,rand2,rand3,rand4,rand5];
    //                var i = randGen();
    this.publicationTitle = "The " + verbs[rand1] + " " + adjectives[rand2] +  " " + nouns[rand3] + ".";
    return this.publicationTitle
  };

    //sentence();

  Journals = [
    {id: 0, name: 'Nature', price: "12.50", distribution: "online"},
    {id: 1, name: 'Science', price: "13.25", distribution: "paper"},
    {id: 2, name: 'Astronomical Journal', price: "29.99", distribution: "online"},
    {id: 3, name: 'Astrophysical Journal', price: "24.20", distribution: "paper"},
    {id: 4, name: 'Canadian Journal of Chemistry', price: "18.75", distribution: "online"}
  ]

  fields = ['Biology', 'Physics', 'Biotechnology', 'Genomics', 'Pharmaceutical', "Life"]

  JournalsObj = [];
  
  ngOnInit(): void {
    this.objSearch = new Search(0,"","","","","");
    this.getCookie();
    //this.cookieService.delete("Search");
  }

  submitted = false;
  
  onSubmit(){

    this.Journals.forEach(element => {
      if(element.id == this.objSearch.$id){
        this.objSearch.$price=element.price;
        this.objSearch.$distribution=element.distribution;
      }
      this.objSearch.$publicationTitle=this.sentence();
    });  
    this.cookieService.set("Search", JSON.stringify(this.objSearch), 30);
    console.log(this.cookieService.get("Search"));
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

      console.log(this.objSearch)

    }else{
      console.log("no cookie")
    }
  }


  
}

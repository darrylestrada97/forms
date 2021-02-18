import { Component, OnInit } from '@angular/core';
import { Search } from '../model/search';

@Component({
  selector: 'app-form-publishing',
  templateUrl: './form-publishing.component.html',
  styleUrls: ['./form-publishing.component.css']
})
export class FormPublishingComponent implements OnInit {

  objSearch: Search;

  //Journals = ['Nature','Science','Astronomical Journal','Astrophysical Journal','Canadian Journal of Chemistry'];

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
    this.objSearch = new Search(0,"","","","");
  }

  submitted = false;
  
  onSubmit(){

    this.Journals.forEach(element => {
      if(element.id == this.objSearch.$id){
        this.objSearch.$price=element.price;
        this.objSearch.$distribution=element.distribution;
      }
    });
  
    console.log(this.objSearch);
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

      console.log(this.globalStatus)

    return this.statusArray

  }

  changeInputInvestigation($event){
    this.globalStatus = this.fields.indexOf($event.srcElement.value) != 0 ? false : true
    console.log(this.globalStatus)
  }


  
}

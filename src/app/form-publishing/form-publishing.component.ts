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
  sumId = 0;
  
  onSubmit(){
    
    this.objSearch.$id = this.sumId

    this.Journals.forEach(element => {
      if(element.id == this.objSearch.$id){
        this.objSearch.$price=element.price;
        this.objSearch.$distribution=element.distribution;
      }
    });
    
    console.log(this.objSearch);
    this.sumId += 1
  }

  textInput: String;
  status: boolean = false;
  statusAuthor: boolean = false;

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
      this.status = aux.toString().split(",").includes("false")? true : false

    return this.status

  }

  changeInputAuthor($event){

      this.textInput = $event.srcElement.value;
      var inputArr = this.textInput.split(" ").filter(function(entry) { 
                                                        return entry.trim() != ''; 
                                                      });                               
      this.statusAuthor = inputArr.length<=3? false : true
    
  }

  
}

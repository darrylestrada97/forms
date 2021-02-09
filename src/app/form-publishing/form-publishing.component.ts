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
    {id: 0, name: 'Nature'},
    {id: 1, name: 'Science'},
    {id: 2, name: 'Astronomical Journal'},
    {id: 3, name: 'Astrophysical Journal'},
    {id: 4, name: 'Canadian Journal of Chemistry'}
  ]

  fields = ['Biology', 'Physics', 'Biotechnology', 'Genomics', 'Pharmaceutical', "Life"]

  JournalsObj = [];  

  ngOnInit(): void {
    this.objSearch = new Search(0,"","","","","");
  }

  submitted = false;
  

  onSubmit(){
    this.submitted = true;
    
    console.log(this.objSearch);
  }

  textInput: String;


  onChange($event){
    this.textInput = $event.srcElement.value;
    var tempArray = []
    var inputArr = this.textInput.split(" ").filter(function(entry) { 
                                                      return entry.trim() != ''; 
                                                    });

    console.log(inputArr.map(function(entry){
      return entry.trim().split("")
    }).filter(function(entry){
      entry.map(function(entry){
        tempArray.push(entry.match(/[a-zA-Z]+$/)? entry : null)
        return tempArray
      })
    }))
  }

  
}

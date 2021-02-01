import { Component, OnInit } from '@angular/core';
import { Search } from '../model/search';

@Component({
  selector: 'app-form-publishing',
  templateUrl: './form-publishing.component.html',
  styleUrls: ['./form-publishing.component.css']
})
export class FormPublishingComponent implements OnInit {

  objSearch: Search;

  Journals = ['Nature','Science','Astronomical Journal','Astrophysical Journal','Canadian Journal of Chemistry'];
  JournalsObj = [];  

  ngOnInit(): void {

  }

  submitted = false;
  asd: String;
  onSubmit(){
    this.submitted = true;
  }

  newSearch( value: any){

    for (let index = 0; index < this.Journals.length; index++) {
      var Journal = this.Journals[index];
      this.JournalsObj.push(new Search(0,"","","",""))
    }

  }
}

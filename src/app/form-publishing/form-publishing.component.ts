import { Component, OnInit } from '@angular/core';
import { Journal } from '../model/publishing';

@Component({
  selector: 'app-form-publishing',
  templateUrl: './form-publishing.component.html',
  styleUrls: ['./form-publishing.component.css']
})
export class FormPublishingComponent implements OnInit {

  objJournal: Journal;

  model;

  Journals = [
    {id: '1', name: 'Nature'},
    {id: '2', name: 'Science'},
    {id: '3', name: 'Astronomical Journal'},
    {id: '4', name: 'Astrophysical Journal'},
    {id: '5', name: 'Canadian Journal of Chemistry'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.objJournal = new Journal(0,"","","","");
  }

}

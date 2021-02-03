
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-country',
  templateUrl: './form-country.component.html',
  styleUrls: ['./form-country.component.css']
})
export class FormCountryComponent implements OnInit {

  cepas = [
    {id: 'L', name: 'L'},
    {id: 'S', name: 'S'},
    {id: 'V_G', name: 'V y G'},
    {id: 'GR_GH', name: 'GR y GH'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

import { Search } from '../model/search';
import { JournalSearch } from '../model/journal';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  Journals = [
    {name: 'Nature', price: "12.50", distribution: "online"},
    {name: 'Science', price: "13.25", distribution: "paper"},
    {name: 'Astronomical Journal', price: "29.99", distribution: "online"},
    {name: 'Astrophysical Journal', price: "24.20", distribution: "paper"},
    {name: 'Canadian Journal of Chemistry', price: "18.75", distribution: "online"}
  ]

  fields = ['Biology', 'Physics', 'Biotechnology', 'Genomics', 'Pharmaceutical', "Life"]

  generateRandomPublications(): Search[]{

    let total = Math.floor(Math.random()*(450-89+1)+89)
    let count = 0;

    let arrSearch = []

    for (let index = 0; index < total; index++) {
      let objSearch = new Search(count, "", "","","","","",[])
      let numInThisIteration = Math.floor(Math.random()*(this.Journals.length))

      objSearch.$journal = Object.entries(this.Journals)[numInThisIteration][1].name
      objSearch.$price = Object.entries(this.Journals)[numInThisIteration][1].price
      objSearch.$distribution = Object.entries(this.Journals)[numInThisIteration][1].distribution
      objSearch.$field = this.fields[Math.floor(Math.random()*(this.fields.length))]

      const randomNameGenerator = num => {
        let res = '';
        for(let i = 0; i < num; i++){
            const random = Math.floor(Math.random() * 27);
            res += String.fromCharCode(97 + random);
        };
        return res;
      };

      objSearch.$author = randomNameGenerator(12)
      objSearch.$publicationTitle = this.sentence()

      arrSearch.push(objSearch)

    }
    return arrSearch
  }

  sentence() {
    var nouns,verbs,adjectives,publicationTitle;

    nouns = ["thermodynamics", "genomic", "temperature", "plastic", "geology", "sea investigation", "tectonic plates", "professor", "stratosphere"];
    verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept"];
    adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating"];

    var rand1 = Math.floor(Math.random() * 9);
    var rand2 = Math.floor(Math.random() * 9);
    var rand3 = Math.floor(Math.random() * 9);

    publicationTitle = "The " + verbs[rand1] + " " + adjectives[rand2] +  " " + nouns[rand3] + ".";
    return publicationTitle
  };

  


}

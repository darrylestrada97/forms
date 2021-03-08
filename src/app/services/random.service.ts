import { Injectable } from '@angular/core';

import { Search } from '../model/search';
import { JournalSearch } from '../model/journal';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }


  randomPrice(){
    return (Math.random() * (89-5+1)).toFixed(2)
  }

  Journals = [
    {name: 'Nature', price: parseInt(this.randomPrice()), distribution: "online"},
    {name: 'Science', price: parseInt(this.randomPrice()), distribution: "paper"},
    {name: 'Astronomical Journal', price: parseInt(this.randomPrice()), distribution: "online"},
    {name: 'Astrophysical Journal', price: parseInt(this.randomPrice()), distribution: "paper"},
    {name: 'Canadian Journal of Chemistry', price: parseInt(this.randomPrice()), distribution: "online"}
  ]

  fields = ['Biology', 'Physics', 'Biotechnology', 'Genomics', 'Pharmaceutical', "Life"]

  generateRandomPublications(): Search[]{

    let total = Math.floor(Math.random()*(450-89+1)+89)
    let count = 0;

    let arrSearch = []

    for (let index = 0; index < total; index++) {
      let objSearch = new Search(count, "", "","",0,"","",[])
      let numInThisIteration = Math.floor(Math.random()*(this.Journals.length))

      objSearch.$id = index;
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


  Countries = [
    { id: 'AF', name: 'Afganistán' },
    { id: 'AL', name: 'Albania' },
    { id: 'DE', name: 'Alemania' },
    { id: 'AD', name: 'Andorra' },
    { id: 'AO', name: 'Angola' },
    { id: 'AI', name: 'Anguilla' },
    { id: 'AQ', name: 'Antártida' },
    { id: 'AG', name: 'Antigua y Barbuda' },
    { id: 'AN', name: 'Antillas Holandesas' },
    { id: 'SA', name: 'Arabia Saudí' },
    { id: 'DZ', name: 'Argelia' },
    { id: 'AR', name: 'Argentina' },
    { id: 'AM', name: 'Armenia' },
    { id: 'AW', name: 'Aruba' },
    { id: 'AU', name: 'Australia' },
    { id: 'AT', name: 'Austria' },
    { id: 'AZ', name: 'Azerbaiyán' },
    { id: 'BS', name: 'Bahamas' },
    { id: 'BH', name: 'Bahrein' },
    { id: 'BD', name: 'Bangladesh' },
    { id: 'BB', name: 'Barbados' },
    { id: 'BE', name: 'Bélgica' },
    { id: 'BZ', name: 'Belice' },
    { id: 'BJ', name: 'Benin' },
    { id: 'BM', name: 'Bermudas' },
    { id: 'BY', name: 'Bielorrusia' },
    { id: 'MM', name: 'Birmania' },
    { id: 'BO', name: 'Bolivia' },
    { id: 'BA', name: 'Bosnia y Herzegovina' },
    { id: 'BW', name: 'Botswana' },
    { id: 'BR', name: 'Brasil' },
    { id: 'BN', name: 'Brunei' },
    { id: 'BG', name: 'Bulgaria' },
    { id: 'BF', name: 'Burkina Faso' },
    { id: 'BI', name: 'Burundi' },
    { id: 'BT', name: 'Bután' },
    { id: 'CV', name: 'Cabo Verde' },
    { id: 'KH', name: 'Camboya' },
    { id: 'CM', name: 'Camerún' },
    { id: 'CA', name: 'Canadá' },
    { id: 'TD', name: 'Chad' },
    { id: 'CL', name: 'Chile' },
    { id: 'CN', name: 'China' },
    { id: 'CY', name: 'Chipre' },
    { id: 'VA', name: 'Ciudad del Vaticano (Santa Sede)' },
    { id: 'CO', name: 'Colombia' },
    { id: 'KM', name: 'Comores' },
    { id: 'CG', name: 'Congo' },
    { id: 'CD', name: 'Congo, República Democrática del' },
    { id: 'KR', name: 'Corea' },
    { id: 'KP', name: 'Corea del Norte' },
    { id: 'CI', name: 'Costa de Marfíl' },
    { id: 'CR', name: 'Costa Rica' },
    { id: 'HR', name: 'Croacia (Hrvatska)' },
    { id: 'CU', name: 'Cuba' },
    { id: 'DK', name: 'Dinamarca' },
    { id: 'DJ', name: 'Djibouti' },
    { id: 'DM', name: 'Dominica' },
    { id: 'EC', name: 'Ecuador' },
    { id: 'EG', name: 'Egipto' },
    { id: 'SV', name: 'El Salvador' },
    { id: 'AE', name: 'Emiratos Árabes Unidos' },
    { id: 'ER', name: 'Eritrea' },
    { id: 'SI', name: 'Eslovenia' },
    { id: 'ES', name: 'España' },
    { id: 'US', name: 'Estados Unidos' },
    { id: 'EE', name: 'Estonia' },
    { id: 'ET', name: 'Etiopía' },
    { id: 'FJ', name: 'Fiji' },
    { id: 'PH', name: 'Filipinas' },
    { id: 'FI', name: 'Finlandia' },
    { id: 'FR', name: 'Francia' },
    { id: 'GA', name: 'Gabón' },
    { id: 'GM', name: 'Gambia' },
    { id: 'GE', name: 'Georgia' },
    { id: 'GH', name: 'Ghana' },
    { id: 'GI', name: 'Gibraltar' },
    { id: 'GD', name: 'Granada' },
    { id: 'GR', name: 'Grecia' },
    { id: 'GL', name: 'Groenlandia' },
    { id: 'GP', name: 'Guadalupe' },
    { id: 'GU', name: 'Guam' },
    { id: 'GT', name: 'Guatemala' },
    { id: 'GY', name: 'Guayana' },
    { id: 'GF', name: 'Guayana Francesa' },
    { id: 'GN', name: 'Guinea' },
    { id: 'GQ', name: 'Guinea Ecuatorial' },
    { id: 'GW', name: 'Guinea-Bissau' },
    { id: 'HT', name: 'Haití' },
    { id: 'HN', name: 'Honduras' },
    { id: 'HU', name: 'Hungría' },
    { id: 'IN', name: 'India' },
    { id: 'ID', name: 'Indonesia' },
    { id: 'IQ', name: 'Irak' },
    { id: 'IR', name: 'Irán' },
    { id: 'IE', name: 'Irlanda' },
    { id: 'BV', name: 'Isla Bouvet' },
    { id: 'CX', name: 'Isla de Christmas' },
    { id: 'IS', name: 'Islandia' },
    { id: 'KY', name: 'Islas Caimán' },
    { id: 'CK', name: 'Islas Cook' },
    { id: 'CC', name: 'Islas de Cocos o Keeling' },
    { id: 'FO', name: 'Islas Faroe' },
    { id: 'HM', name: 'Islas Heard y McDonald' },
    { id: 'FK', name: 'Islas Malvinas' },
    { id: 'MP', name: 'Islas Marianas del Norte' },
    { id: 'MH', name: 'Islas Marshall' },
    { id: 'UM', name: 'Islas menores de Estados Unidos' },
    { id: 'PW', name: 'Islas Palau' },
    { id: 'SB', name: 'Islas Salomón' },
    { id: 'SJ', name: 'Islas Svalbard y Jan Mayen' },
    { id: 'TK', name: 'Islas Tokelau' },
    { id: 'TC', name: 'Islas Turks y Caicos' },
    { id: 'VI', name: 'Islas Vírgenes (EEUU)' },
    { id: 'VG', name: 'Islas Vírgenes (Reino Unido)' },
    { id: 'WF', name: 'Islas Wallis y Futuna' },
    { id: 'IL', name: 'Israel' },
    { id: 'IT', name: 'Italia' },
    { id: 'JM', name: 'Jamaica' },
    { id: 'JP', name: 'Japón' },
    { id: 'JO', name: 'Jordania' },
    { id: 'KZ', name: 'Kazajistán' },
    { id: 'KE', name: 'Kenia' },
    { id: 'KG', name: 'Kirguizistán' },
    { id: 'KI', name: 'Kiribati' },
    { id: 'KW', name: 'Kuwait' },
    { id: 'LA', name: 'Laos' },
    { id: 'LS', name: 'Lesotho' },
    { id: 'LV', name: 'Letonia' },
    { id: 'LB', name: 'Líbano' },
    { id: 'LR', name: 'Liberia' },
    { id: 'LY', name: 'Libia' },
    { id: 'LI', name: 'Liechtenstein' },
    { id: 'LT', name: 'Lituania' },
    { id: 'LU', name: 'Luxemburgo' },
    { id: 'MK', name: 'Macedonia, Ex-República Yugoslava de' },
    { id: 'MG', name: 'Madagascar' },
    { id: 'MY', name: 'Malasia' },
    { id: 'MW', name: 'Malawi' },
    { id: 'MV', name: 'Maldivas' },
    { id: 'ML', name: 'Malí' },
    { id: 'MT', name: 'Malta' },
    { id: 'MA', name: 'Marruecos' },
    { id: 'MQ', name: 'Martinica' },
    { id: 'MU', name: 'Mauricio' },
    { id: 'MR', name: 'Mauritania' },
    { id: 'YT', name: 'Mayotte' },
    { id: 'MX', name: 'México' },
    { id: 'FM', name: 'Micronesia' },
    { id: 'MD', name: 'Moldavia' },
    { id: 'MC', name: 'Mónaco' },
    { id: 'MN', name: 'Mongolia' },
    { id: 'MS', name: 'Montserrat' },
    { id: 'MZ', name: 'Mozambique' },
    { id: 'NA', name: 'Namibia' },
    { id: 'NR', name: 'Nauru' },
    { id: 'NP', name: 'Nepal' },
    { id: 'NI', name: 'Nicaragua' },
    { id: 'NE', name: 'Níger' },
    { id: 'NG', name: 'Nigeria' },
    { id: 'NU', name: 'Niue' },
    { id: 'NF', name: 'Norfolk' },
    { id: 'NO', name: 'Noruega' },
    { id: 'NC', name: 'Nueva Caledonia' },
    { id: 'NZ', name: 'Nueva Zelanda' },
    { id: 'OM', name: 'Omán' },
    { id: 'NL', name: 'Países Bajos' },
    { id: 'PA', name: 'Panamá' },
    { id: 'PG', name: 'Papúa Nueva Guinea' },
    { id: 'PK', name: 'Paquistán' },
    { id: 'PY', name: 'Paraguay' },
    { id: 'PE', name: 'Perú' },
    { id: 'PN', name: 'Pitcairn' },
    { id: 'PF', name: 'Polinesia Francesa' },
    { id: 'PL', name: 'Polonia' },
    { id: 'PT', name: 'Portugal' },
    { id: 'PR', name: 'Puerto Rico' },
    { id: 'QA', name: 'Qatar' },
    { id: 'UK', name: 'Reino Unido' },
    { id: 'CF', name: 'República Centroafricana' },
    { id: 'CZ', name: 'República Checa' },
    { id: 'ZA', name: 'República de Sudáfrica' },
    { id: 'DO', name: 'República Dominicana' },
    { id: 'SK', name: 'República Eslovaca' },
    { id: 'RE', name: 'Reunión' },
    { id: 'RW', name: 'Ruanda' },
    { id: 'RO', name: 'Rumania' },
    { id: 'RU', name: 'Rusia' },
    { id: 'EH', name: 'Sahara Occidental' },
    { id: 'KN', name: 'Saint Kitts y Nevis' },
    { id: 'WS', name: 'Samoa' },
    { id: 'AS', name: 'Samoa Americana' },
    { id: 'SM', name: 'San Marino' },
    { id: 'VC', name: 'San Vicente y Granadinas' },
    { id: 'SH', name: 'Santa Helena' },
    { id: 'LC', name: 'Santa Lucía' },
    { id: 'ST', name: 'Santo Tomé y Príncipe' },
    { id: 'SN', name: 'Senegal' },
    { id: 'SC', name: 'Seychelles' },
    { id: 'SL', name: 'Sierra Leona' },
    { id: 'SG', name: 'Singapur' },
    { id: 'SY', name: 'Siria' },
    { id: 'SO', name: 'Somalia' },
    { id: 'LK', name: 'Sri Lanka' },
    { id: 'PM', name: 'St Pierre y Miquelon' },
    { id: 'SZ', name: 'Suazilandia' },
    { id: 'SD', name: 'Sudán' },
    { id: 'SE', name: 'Suecia' },
    { id: 'CH', name: 'Suiza' },
    { id: 'SR', name: 'Surinam' },
    { id: 'TH', name: 'Tailandia' },
    { id: 'TW', name: 'Taiwán' },
    { id: 'TZ', name: 'Tanzania' },
    { id: 'TJ', name: 'Tayikistán' },
    { id: 'TF', name: 'Territorios franceses del Sur' },
    { id: 'TP', name: 'Timor Oriental' },
    { id: 'TG', name: 'Togo' },
    { id: 'TO', name: 'Tonga' },
    { id: 'TT', name: 'Trinidad y Tobago' },
    { id: 'TN', name: 'Túnez' },
    { id: 'TM', name: 'Turkmenistán' },
    { id: 'TR', name: 'Turquía' },
    { id: 'TV', name: 'Tuvalu' },
    { id: 'UA', name: 'Ucrania' },
    { id: 'UG', name: 'Uganda' },
    { id: 'UY', name: 'Uruguay' },
    { id: 'UZ', name: 'Uzbekistán' },
    { id: 'VU', name: 'Vanuatu' },
    { id: 'VE', name: 'Venezuela' },
    { id: 'VN', name: 'Vietnam' },
    { id: 'YE', name: 'Yemen' },
    { id: 'YU', name: 'Yugoslavia' },
    { id: 'ZM', name: 'Zambia' },
    { id: 'ZW', name: 'Zimbabue' }
  ];

  Languages = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Spanish'},
    {id: 3, name: 'German'},
    {id: 4, name: 'French'},
    {id: 5, name: 'Stonian'},
    {id: 5, name: 'Chinese'},
    {id: 5, name: 'Japanese'},
    {id: 5, name: 'Esperant'},
    {id: 5, name: 'Kinglon'},
  ]


  generateRandomJournals(): JournalSearch[]{

    let total = Math.floor(Math.random()*(450-89+1)+89)
    let count = 0;

    let arrJournal = []

    for (let index = 0; index < total; index++) {
      let objJournal = new JournalSearch(count, "", "",0,"",false,"","")
      let numInThisIteration = Math.floor(Math.random()*(this.Journals.length))

      objJournal.$id = index;
      objJournal.$country = Object.entries(this.Countries)[Math.floor(Math.random()*(this.Countries.length))][1].name
      objJournal.$nameJournal = Object.entries(this.Journals)[numInThisIteration][1].name
      objJournal.$price = Object.entries(this.Journals)[numInThisIteration][1].price
      objJournal.$translated = Math.floor(Math.random() * 2) == 0 ? false : true;
      objJournal.$field = this.fields[Math.floor(Math.random()*(this.fields.length))]

      const randomPairLanguages = () => {
        let lan1 = '';
        let lan2 = '';
        while(lan1 == lan2){
          lan1 = Object.entries(this.Languages)[Math.floor(Math.random() * (this.Languages.length))][1].name
          lan2 = Object.entries(this.Languages)[Math.floor(Math.random() * (this.Languages.length))][1].name
        }

        return [lan1, lan2];
      };


      objJournal.$language = randomPairLanguages()[0]
      objJournal.$translated ? objJournal.$translation = randomPairLanguages()[1] : null

      arrJournal.push(objJournal)
    }
    return arrJournal

  }

  


}

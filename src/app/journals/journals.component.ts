import { Component, OnInit } from '@angular/core';
import { JournalSearch } from '../model/journal';

import { CookieService } from 'ngx-cookie-service';
import { RandomService } from '../services/random.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {

  cookieObj: any;

  constructor(private cookieService: CookieService, private random: RandomService, private toastr: ToastrService) { }

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


  Journals = [
    {name: 'Nature', price: 12.50, distribution: "online"},
    {name: 'Science', price: 13.25, distribution: "paper"},
    {name: 'Astronomical Journal', price: 29.99, distribution: "online"},
    {name: 'Astrophysical Journal', price: 24.20, distribution: "paper"},
    {name: 'Canadian Journal of Chemistry', price: 18.75, distribution: "online"}
  ]

  Languages = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Spanish'},
    {id: 3, name: 'German'},
    {id: 4, name: 'French'},
    {id: 5, name: 'Stonian'},
    {id: 6, name: 'Chinese'},
    {id: 7, name: 'Japanese'},
    {id: 8, name: 'Esperant'},
    {id: 9, name: 'Kinglon'},
  ]

  journalName:String =""
  prop:string = ""
  country:String = ""
  status: boolean = false;
  statusName: boolean = false
  globalStatus: boolean = false

  onItemChange($event){
    $event.srcElement.value == "Yes"? this.status = true : this.status = false
  }

  objJournal: JournalSearch;
  //Pagination properties
  currentPage: number;
  itemsPerPage: number;
  newItemsPerPage: number;
  jouralSelected: JournalSearch;
  journalFiltered: JournalSearch[];
  randomJournals;

  ngOnInit(): void {
    (document.getElementsByClassName('content')[0] as HTMLElement).style.display = 'block';
    (document.getElementsByClassName('content')[1] as HTMLElement).style.display = 'none';
    this.objJournal = new JournalSearch(0, "", "", 0, "", false, "", "");
    this.getCookie();
    //this.cookieService.delete("Search");

    this.randomJournals = this.random.generateRandomJournals()
    this.journalFiltered = this.randomJournals;
    this.itemsPerPage=10;
    this.currentPage=1;

  }

  changeJournal($event){
    let text = $event.srcElement.value
    this.statusName = false
    
    for (let index = 0; index < this.Journals.length; index++) {
      
      if(text == this.Journals[index].name){
        this.statusName = true
        break
      }else{
        this.statusName = false
      }
    }

    this.globalStatus = this.statusName? true : false

    return this.statusName
  }

  changeInputLanguage($event){
    this.globalStatus = this.objJournal.$translation == this.objJournal.$language ? false : true
  }

  onSubmit(){

    this.Journals.forEach(element => {
      if(element.name == this.objJournal.$nameJournal){
        this.objJournal.$price=element.price;
      }
    });
    this.cookieService.set("Journal", JSON.stringify(this.objJournal), 30);
    console.log(this.cookieService.get("Journal"));
    //console.log(this.objJournal);
  }

  getCookie(){
    if(this.cookieService.check("Journal")){
      this.cookieObj = JSON.parse(this.cookieService.get("Journal"));

      Object.assign(this.objJournal, this.cookieObj);

      console.log(this.objJournal)

    }else{
      console.log("no cookie")
    }
  }

  changeItemsPerPage($event){
    this.itemsPerPage = $event.srcElement.value != 'all' ? $event.srcElement.value : this.randomJournals.length;
  }

  journalFilter: String;
  countryFilter: String;
  languageFilter: String;
  fieldFilter: String;
  translationFilter: String;
  langTransY: String;
  langTransN:String;
  priceFilter = 90;

  filter(){
    this.journalFiltered = this.randomJournals.
      filter(elem => {
        let journalNameValid: boolean = false;
        let countryValid: boolean = false;
        let languageValid: boolean = false;
        let fieldValid: boolean = false;
        let langTransYValid: boolean = false;
        let langTransNValid: boolean = false;
        let translationValid: boolean = false;
        let priceValid: boolean = false;

        priceValid = elem.$price <= this.priceFilter ? true : false

        if(this.langTransY && this.langTransY != '' ){

          if(elem.$translated){
            langTransYValid = true;
          }
        }else{
          langTransYValid = true;
        }

        if(this.langTransN && this.langTransN != '' ){

          if(!elem.$translated){
            langTransNValid = true;
          }
        }else{
          langTransNValid = true;
        }

        if(this.journalFilter && this.journalFilter != ''){
          if(elem.$nameJournal.toLowerCase().indexOf(this.journalFilter.toLowerCase()) != -1){
            journalNameValid = true;
          }
        }else{
          journalNameValid = true;
        }
        
        if(this.countryFilter && this.countryFilter != ''){
          if(elem.$country.toLowerCase().indexOf(this.countryFilter.toLowerCase()) != -1){
            countryValid = true;
          }
        }else{
          countryValid = true;
        }

        if(this.languageFilter && this.languageFilter != ''){
          if(elem.$language.toLowerCase().indexOf(this.languageFilter.toLowerCase()) != -1){
            languageValid = true;
          }
        }else{
          languageValid = true;
        }

        if(this.fieldFilter && this.fieldFilter != ''){
          if(elem.$field.toLowerCase().indexOf(this.fieldFilter.toLowerCase()) != -1){
            fieldValid = true;
          }
        }else{
          fieldValid = true;
        }

        if(this.translationFilter && this.translationFilter != ''){
          if(elem.$translation.toLowerCase().indexOf(this.translationFilter.toLowerCase()) != -1){
            translationValid = true;
          }
        }else{
          translationValid = true;
        }


        return journalNameValid && countryValid && languageValid && fieldValid && translationValid && priceValid && langTransYValid && langTransNValid;

    })

  }

  statusFiltered: boolean;
  onItemChangeFilter($event){
    $event.srcElement.value == "Yes"? this.statusFiltered = true : this.statusFiltered = false;

    this.toastr.error('Hello world!', 'Toastr fun!');

  }

  allJournals(){
    (document.getElementsByClassName('content')[0] as HTMLElement).style.display = 'none';
    (document.getElementsByClassName('content')[1] as HTMLElement).style.display = 'block';
  }

  killCookie(){
    this.cookieService.get("Journal")? this.cookieService.delete("Journal") : null
  }

  removeJournal(journal){
    this.randomJournals.splice
      (this.randomJournals.indexOf(journal),1);
    this.journalFiltered.splice
      (this.journalFiltered.indexOf(journal),1);
  }

  goTo(search){
    (document.getElementsByClassName('content')[0] as HTMLElement).style.display = 'block';
    (document.getElementsByClassName('content')[1] as HTMLElement).style.display = 'none';
    this.jouralSelected = search;

    this.objJournal.$nameJournal = search.$nameJournal;
    this.objJournal.$country = search.$country;
    this.objJournal.$language = search.$language;
    this.objJournal.$field = search.$field;


  }

  

  

}

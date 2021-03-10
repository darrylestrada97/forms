import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';
import {ThemePalette} from '@angular/material/core';
import { searchVaccine } from '../model/searchVaccine';
import { CookieService } from 'ngx-cookie-service';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-vaccination-progress',
  templateUrl: './vaccination-progress.component.html',
  styleUrls: ['./vaccination-progress.component.css']
})
export class VaccinationProgressComponent implements OnInit {

  @Input() vacinnesProgress: searchVaccine;

  @ViewChild('compareVaccineForm') 
  compareVaccineForm: HTMLFormElement;
  

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'AstraZeneca', completed: false, color: 'primary'},
      {name: 'SpunkV', completed: false, color: 'accent'},
      {name: 'Pfizer', completed: false, color: 'warn'},
      {name: 'Moderna', completed: false, color: 'warn'},
      {name: 'Sinovac', completed: false, color: 'warn'}
    ]
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

  cookieObj: any;

  country = "";
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  

  status: boolean = true;
  
  Phyzer = false;
  
  title = 'select-county';
  firstCountry = "All";
  
  countryFormControl = new FormControl();
  countryFormGroup: FormGroup;
 


  onItemChange($event){
    $event.srcElement.value == "All"? this.status = true : this.status = false;
  }

  
  /**
* Date: 03/11/2021
* Version: 1.2
* Author: Darryl.
* 
* 
* This function sends the information the the console and alse stores a cookie object.
*/



  
  sendForm(){
    let vaccine = this.task.subtasks;
    // console.log(this.firstCountry);
    // console.log(vaccine);
    this.cookieService.set("vacinnesProgress", JSON.stringify(this.vacinnesProgress));
    this.vacinnesProgress.vaccine = vaccine;
    console.log(this.vacinnesProgress);
  }

  private buildForm() {
  }
  constructor(private formBuilder: FormBuilder, private cookieService: CookieService) {

  }
  ngOnInit(): void {
    this.vacinnesProgress = new searchVaccine("",this.task);
    this.countryFormGroup = this.formBuilder.group({
      country: []
    });

    this.initializeForm()
  }



  onCountrySelected($event: Country) {
    this.firstCountry = $event.name;
  }

  initializeForm(){
    if (this.compareVaccineForm) {
      this.compareVaccineForm.reset();
      this.compareVaccineForm.form.markAsPristine();
      this.compareVaccineForm.form.markAsUntouched();
    }
    
    //If this.reservation is null is because
    //no input param has been received.
    //Otherwise, we should be careful not to
    //smash the parameter
    if(!this.vacinnesProgress){
      this.vacinnesProgress =  new searchVaccine("","");
    }
    
  }
  
  getCookie(){
    if(this.cookieService.check("vacinnesProgress")){
      this.cookieObj = JSON.parse(this.cookieService.get("vacinnesProgress"));
       /**
        * Copy the values of all of the enumerable own properties from one or more source objects to a
        * target object. Returns the target object.
        * @param target The target object to copy to.
        * @param source The source object from which to copy properties.
        */
      Object.assign(this.vacinnesProgress, this.cookieObj);

    }
  
}

}

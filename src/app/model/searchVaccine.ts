export class searchVaccine{


    constructor(
        public country: String,
        public vaccine: String,
        
      ){	}
    
    
    

    public get $country(): String{
        return this.country;
    }

    public get $vaccine(): String{
        return this.vaccine;
    }


    public set $country(value: String) {
    this.country = value;
    }
    
    public set $vaccine(value: String) {
		this.vaccine = value;
    }
}
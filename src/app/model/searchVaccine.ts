export class searchVaccine {


    constructor(
        public country: String,
        public vaccine,
      ){	}
    
    
    

    public get $country(): String{
        return this.country;
    }

    public get $vaccine(){
        return this.vaccine;
    }


    public set $country(value: String) {
    this.country = value;
    }
    
    public set $vaccine(value) {
		this.vaccine = value;
    }
}
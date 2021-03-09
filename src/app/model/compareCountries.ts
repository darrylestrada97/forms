export class compareCountries{


    constructor(
        public firstCountry?: String,
        public secondCountry?: String,
        public searchType?: String,
        public strain?: String,
        public date?: Date[],
      ){	}
    
    
    

    public get $firstCountry(): String{
        return this.firstCountry;
    }

    public get $secondCountry(): String{
        return this.secondCountry;
    }

    public get $searchType(): String{
      return this.searchType;
    }

    public get $date(): Date[]{
        return this.date;
    }
    public get $strain(): String{
        return this.strain;
    }



    public set $firstCountry(value: String) {
    this.firstCountry = value;
    }
    
    public set $secondCountry(value: String) {
		this.secondCountry = value;
    }
    public set $searchType(value: String) {
		  this.searchType = value;
    }
    public set $date(value: Date[]) {
		this.date = value;
    }
    public set $strain(value: String) {
		this.strain = value;
    }
    
    

}
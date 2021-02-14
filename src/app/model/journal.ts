export class JournalSearch{

    /*constructor($id: number, $field: String, $keyWords: [], $price: String, $distribution: String) {
		this.id = $id;
		this.field = $field;
		this.keyWords = $keyWords;
		this.price = $price;
		this.distribution = $distribution;
    }*/


    constructor(
        public id: number,
        public country: String,
        public nameJournal: String,
        public price: String,
        public language: String,
        public translation: boolean,
        public field: String
      ){}

    public get $id(): number{
        return this.id;
    }

    public get $country(): String{
        return this.country;
    }

    public get $nameJournal(): String{
        return this.nameJournal;
    }

    public get $price(): String{
      return this.price;
  }

    public get $language(): String{
      return this.language;
    }

    public get $translation(){
        return this.translation;
    }

    public get $field(): String{
        return this.field;
    }

    public set $id(value: number){
        this.id = value;
    }

    public set $country(value: String) {
    this.country = value;
    }

    public set $nameJournal(value: String) {
		this.nameJournal = value;
    }

    public set $price(value: String) {
      this.price = value;
      }

    public set $language(value: String) {
		this.language = value;
    }
    public set $translation(value: boolean) {
		this.translation = value;
    }
    public set $field(value: String) {
    this.field = value;
    }
    
    

}
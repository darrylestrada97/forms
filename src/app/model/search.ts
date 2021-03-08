
export class Search{

    /*constructor($id: number, $field: String, $keyWords: [], $price: String, $distribution: String) {
		this.id = $id;
		this.field = $field;
		this.keyWords = $keyWords;
		this.price = $price;
		this.distribution = $distribution;
    }*/

    constructor(
        public id: number,
        public journal: String,
        public field: String,
        public author: String,
        public price: number,
        public distribution: String,
        public publicationTitle: String,
        public keyWords?: [],
      ){	}
    
    
    public get $id(): number{
        return this.id;
    }

    public get $journal(): String{
      return this.journal;
  }

    public get $field(): String{
        return this.field;
    }

    public get $author(): String{
      return this.author;
    }

    public get $keyWords(): []{
        return this.keyWords;
    }

    public get $price(): number{
        return this.price;
    }

    public get $publicationTitle(): String{
      return this.publicationTitle;
    }

    public get $distribution(): String{
        return this.distribution;
    }

    public set $id(value: number){
        this.id = value;
    }

    public set $author(value: String) {
    this.author = value;
    }

    public set $journal(value: String) {
      this.journal = value;
      }
    
    public set $field(value: String) {
		this.field = value;
    }
    public set $price(value: number) {
		  this.price = value;
    }
    public set $distribution(value: String) {
		this.distribution = value;
    }
    public set $publicationTitle(value: String) {
      this.publicationTitle = value;
      }
    public set $keyWords(value: []) {
		this.keyWords = value;
    }
    

}
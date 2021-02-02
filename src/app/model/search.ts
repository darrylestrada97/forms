
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
        public field: String,
        public author: String,
        public price: String,
        public distribution: String,
        public keyWords?: [],
      ){	}
    
    
    public get $id(): number{
        return this.id;
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

    public get $price(): String{
        return this.price;
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
    
    public set $field(value: String) {
		this.field = value;
    }
    public set $price(value: String) {
		this.price = value;
    }
    public set $distribution(value: String) {
		this.distribution = value;
    }
    public set $keyWords(value: []) {
		this.keyWords = value;
    }
    

}
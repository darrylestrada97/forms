
export class Journal{
    private id: number;
    private field: String;
    private name: String;
    private price: String;
    private distribution: String;

    constructor($id: number, $field: String, $name: String, $price: String, $distribution: String) {
		this.id = $id;
		this.field = $field;
		this.name = $name;
		this.price = $price;
		this.distribution = $distribution;
    }
    
    public get $id(): number{
        return this.id;
    }

    public get $field(): String{
        return this.field;
    }

    public get $name(): String{
        return this.name;
    }

    public get $price(): String{
        return this.price;
    }

    public get $distribution(): String{
        return this.distribution;
    }

}
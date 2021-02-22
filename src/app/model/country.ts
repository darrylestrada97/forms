export class Country{

  constructor(
    public id: number, 
    public contry: String, 
    public date: String, 
    public cepa: String
) { }

  public get $id(): number {
    return this.id;
}

public set $id(value: number) {
    this.id = value;
}

public get $contry(): String {
    return this.contry;
}

public set $contry(value: String) {
    this.contry = value;
}

public get $date(): String {
    return this.date;
}

public set $date(value: String) {
    this.date = value;
}

public get $cepa(): String {
    return this.cepa;
}

public set $cepa(value: String) {
    this.cepa = value;
}
  
    
}
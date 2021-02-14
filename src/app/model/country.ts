export class Country{

  constructor(
    public id: number, 
    public name: String, 
    public location: String, 
    public region: String
) { }

  public get $id(): number {
    return this.id;
}

public set $id(value: number) {
    this.id = value;
}

public get $name(): String {
    return this.name;
}

public set $name(value: String) {
    this.name = value;
}

public get $location(): String {
    return this.location;
}

public set $location(value: String) {
    this.location = value;
}

public get $region(): String {
    return this.region;
}

public set $region(value: String) {
    this.region = value;
}
  
    
}
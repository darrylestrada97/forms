export class Country{

  constructor(
    id: number, 
    name: String, 
    location: String, 
    region: String
) {
    this.id = id
    this.name = name
    this.location = location
    this.region = region
  }

  public get id(): number {
    return this.id;
}

public set id(id: number) {
    this.id = id;
}

public get name(): String {
    return this.name;
}

public set name(name: String) {
    this.name = name;
}

public get location(): String {
    return this.location;
}

public set location(location: String) {
    this.location = location;
}

public get region(): String {
    return this.region;
}

public set region(region: String) {
    this.region = region;
}
  
    
}
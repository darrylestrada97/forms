export class Country{

  constructor(
    id: number, 
    name: String, 
    locating: String, 
    region: String
) {
    this.id = id
    this.name = name
    this.locating = locating
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

public get locating(): String {
    return this.locating;
}

public set locating(locating: String) {
    this.locating = locating;
}

public get region(): String {
    return this.region;
}

public set region(region: String) {
    this.region = region;
}
  
    
}
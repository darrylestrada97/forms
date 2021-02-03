export class Improvements{

    constructor(
      id: number, 
      name: String, 
      location: String, 
      evaluation: number,
      recomendation: String
  ) {
      this.id = id
      this.name = name
      this.location = location
      this.evaluation = evaluation
      this.recomendation = recomendation
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
  
  public get evaluation(): number {
      return this.evaluation;
  }
  
  public set evaluation(evaluation: number) {
      this.evaluation = evaluation;
  }
  public get recomendation(): String {
    return this.recomendation;
}

public set recomendation(recomendation: String) {
    this.recomendation = recomendation;
}
    
      
  }
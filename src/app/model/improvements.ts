export class Improvements{

    constructor(
      public id: number, 
      public comments: String, 
      public location: String, 
      public evaluation: number,
      public recomendation: String
  ) {}
  
    public get $id(): number {
      return this.id;
  }
  
  public set $id(value: number) {
      this.id = value;
  }
  
  public get $comments(): String {
      return this.comments;
  }
  
  public set $comments(value: String) {
      this.comments = value;
  }
  
  public get $location(): String {
      return this.location;
  }
  
  public set $location(value: String) {
      this.location = value;
  }
  
  public get $evaluation(): number {
      return this.evaluation;
  }
  
  public set $evaluation(value: number) {
      this.evaluation = value;
  }
  public get $recomendation(): String {
    return this.recomendation;
}

public set $recomendation(value: String) {
    this.recomendation = value;
}
    
      
  }
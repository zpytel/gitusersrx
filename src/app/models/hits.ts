export interface Hits{
    total:number;
    max_score:number;
    hits:Hit[];
}
export interface Hit{
  id:string;
  score:number;
  source:{text:string};
}
import {Subject} from 'rxjs/Subject';

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
export interface Load{
  search:string;
  records:number;
}
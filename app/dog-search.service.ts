import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Dog }           from './dog';

@Injectable()
export class DogSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Dog[]> {
    return this.http
               .get(`app/dogs/?name=${term}`)
               .map((r: Response) => r.json().data as Dog[]);
  }
}

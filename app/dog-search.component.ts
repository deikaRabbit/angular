import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { DogSearchService } from './dog-search.service';
import { Dog } from './dog';

@Component({
  moduleId: module.id,
  selector: 'dog-search',
  templateUrl: 'dog-search.component.html',
  styleUrls: [ 'dog-search.component.css' ],
  providers: [DogSearchService]
})

export class DogSearchComponent implements OnInit {
  dogs: Observable<Dog[]>;

  private searchTerms = new Subject<string>();
  constructor(
    private dogSearchService: DogSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.dogs = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.dogSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Dog[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Dog[]>([]);
      });
  }
  gotoDetail(dog: Dog): void {
    let link = ['/detail', dog.id];
    this.router.navigate(link);
  }
}

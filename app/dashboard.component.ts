import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dog } from './dog';
import { DogService } from './dog-service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ],
})

export class DashboardComponent implements OnInit {
    dogs: Dog[] = [];

    constructor(private router: Router,
                private dogService: DogService) { }

    ngOnInit(): void {
        this.dogService.getDogs().then(dogs => this.dogs = dogs.slice(1, 5));
    }

    gotoDetail(dog: Dog): void {
        let link = ['/detail', dog.id];
        this.router.navigate(link);
    }
}

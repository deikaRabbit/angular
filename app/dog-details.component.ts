import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { DogService } from './dog-service';
import { Dog } from './dog';

@Component({
    moduleId: module.id,
    selector: 'my-dog-details',
    template: `<div *ngIf="dog">
                   <h2>{{dog.name}} details:</h2>
                   <div><label>Id: </label>{{dog.id}}</div>
                   <div>
                       <label>Name: </label>
                       <input type="text" [(ngModel)]="dog.name" placeholder="name">
                  </div>
                  <button (click)="save()">Save</button>
                  <button (click)="goBack()">Back</button>
              </div>`,
    styleUrls: [ 'dog-details.component.css' ],
})

export class DogDetailsComponent implements OnInit {
    dog: Dog;
    constructor (
        private dogService: DogService,
        private route: ActivatedRoute,
        private location: Location ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {let id = +params['id'];
        this.dogService.getDog(id).then(dog => this.dog = dog);});
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
      this.dogService.update(this.dog).then(() => this.goBack());
    }
}

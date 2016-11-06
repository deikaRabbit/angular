import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dog } from './dog';
import { DogService } from './dog-service';


@Component({
    moduleId: module.id,
    selector: 'my-dogs',
    templateUrl: 'dog.component.html',
    styleUrls: ['dog.component.css']
})

export class DogComponent implements OnInit {
    title = 'Tour of Dogs';
    dogs: Dog[];
    selectDog : Dog;

    constructor(private router: Router,
                private dogService: DogService) { }

    ngOnInit(): void {
        this.dogService.getDogs().then(dogs => this.dogs = dogs);
    };

    onSelect(dog: Dog): void {
       this.selectDog = dog;
    };

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectDog.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
            this.dogService.create(name).then(dog => {
                this.dogs.push(dog);
                this.selectDog = null;
        });
    }

    delete(dog: Dog): void {
        this.dogService.delete(dog.id).then(() => {
            this.dogs = this.dogs.filter(d => d !== dog);
            if (this.selectDog === dog)
            { this.selectDog = null; }
            });
    }
}

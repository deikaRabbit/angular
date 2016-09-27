import { Component, OnInit } from '@angular/core';
import { Dog } from './dog';
import { DogService } from './dog-service';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <h2>My Dogs</h2>
               <ul class="doges">
                   <li *ngFor="let dog of dogs"
                   [class.selected]="dog === selectDog"
                   (click)="onSelect(dog)">
                       <span class="badge">{{dog.id}}</span>{{dog.name}}
                   </li>
               </ul>
               <my-dog-details [dog]="selectDog"></my-dog-details>`,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .doges {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .doges li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .doges li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .doges li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .doges .text {
            position: relative;
            top: -3px;
        }
        .doges .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    providers: [DogService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Dogs';
    dogs: Dog[];
    selectDog : Dog;

    constructor(private dogService: DogService) { }

    ngOnInit(): void {
        this.dogService.getDogs().then(dogs => this.dogs = dogs);
    };

    onSelect(dog: Dog): void {
       this.selectDog = dog;
    }
}

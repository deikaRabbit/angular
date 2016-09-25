import { Component } from '@angular/core';

export class Dog {
    id: number,
    name: string
}

const DOGS: Dog[] = [
    {id:1, name:'Tony'},
    {id:2, name:'CC'},
    {id:3, name:'PP'},
    {id:4, name:'GG'}
];

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
               <div *ngIf="selectDog">
                   <h2>{{selectDog.name}} details:</h2>
                   <div><label>Id: </label>{{selectDog.id}}</div>
                   <div>
                       <label>Name: </label>
                       <input type="text" [(ngModel)]="selectDog.name" placeholder="name">
               </div>`,
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
    `]
})

export class AppComponent {
    title = 'Tour of Dogs';
    dogs = DOGS;
    selectDog : Dog;
    
    onSelect(dog: Dog): void {
       this.selectDog = dog;
    }  
}

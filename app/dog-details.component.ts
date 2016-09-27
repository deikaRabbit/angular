import { Component, Input } from '@angular/core';
import { Dog } from './dog';

@Component({
    selector: 'my-dog-details',
    template: `<div *ngIf="dog">
                   <h2>{{dog.name}} details:</h2>
                   <div><label>Id: </label>{{dog.id}}</div>
                   <div>
                       <label>Name: </label>
                       <input type="text" [(ngModel)]="dog.name" placeholder="name">
                  </div>
              </div>`
})

export class DogDetailsComponent{
    @Input()
    dog: Dog;
}

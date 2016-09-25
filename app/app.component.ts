import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <h2>{{dog.name}} details: </h2>
               <div><label>Id: </label>{{dog.id}}</div>
               <div>
                   <label>Name: </label>
                   <input type="text" [(ngModel)]="dog.name" placeholder="name"/>
               </div>`
})

export class AppComponent {
    title = 'Tour of Dogs'
    dog : Dog = {
        id: 1,
        name: 'Tony'
    }
}

export class Dog {
    id: number,
    name: string
}

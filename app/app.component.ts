import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <nav>
                 <a routerLink="/dogs">Dogs</a>
                 <a routerLink="/dashboard">Dashboard</a>
             </nav>
             <router-outlet></router-outlet>`,
  styleUrls: [ 'app/app.component.css' ],
})

export class AppComponent {
  title = 'Tour of Dogs';
}

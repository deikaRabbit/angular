import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { DogDetailsComponent } from './dog-details.component';
import { DogComponent } from './dog.component';
import { DogService } from './dog-service';
import { routing } from './app.routing'
import { DashboardComponent } from './dashboard.component';
import { DogSearchComponent } from './dog-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        DogDetailsComponent,
        DogComponent,
        DashboardComponent,
        DogSearchComponent,
    ],
    providers: [
        DogService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

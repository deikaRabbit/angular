import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { DogDetailsComponent } from './dog-details.component';
import { DogComponent } from './dog.component';
import { DogService } from './dog-service';
import { routing } from './app.routing'
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
    ],
    declarations: [
        AppComponent,
        DogDetailsComponent,
        DogComponent,
        DashboardComponent,
    ],
    providers: [
        DogService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

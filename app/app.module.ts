import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { DogDetailsComponent } from './dog-details.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DogDetailsComponent,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

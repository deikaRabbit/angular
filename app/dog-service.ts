import { Injectable } from '@angular/core';

import { Dog } from './dog';
import { DOGS } from './mock-dog';

@Injectable()
export class DogService {
    getDogs(): Promise<Dog[]> {
        return Promise.resolve(DOGS);
    }

    getDogsSlowly(): Promise<Dog[]> {
        return new Promise<Dog[]>(resolve => setTimeout(resolve, 2000)) // delay 2 seconds
                .then(() => this.getDogs());
    }
}

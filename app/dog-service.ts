import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dog } from './dog';

@Injectable()
export class DogService {
    private dogsUrl = 'app/dogs';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getDogs(): Promise<Dog[]> {
        return this.http.get(this.dogsUrl)
           .toPromise()
           .then(response => response.json().data as Dog[])
           .catch(this.handleError);
    }

    getDogsSlowly(): Promise<Dog[]> {
        return new Promise<Dog[]>(resolve => setTimeout(resolve, 2000)) // delay 2 seconds
                .then(() => this.getDogs());
    }

    getDog(id: number): Promise<Dog> {
        return this.getDogs()
             .then(dogs => dogs.find(dog=> dog.id === id));
    }

    update(dog: Dog): Promise<Dog> {
      const url = `${this.dogsUrl}/${dog.id}`;
      return this.http.put(url, JSON.stringify(dog), {headers: this.headers}).toPromise()
      .then(() => dog).catch(this.handleError);
    }

    create(name: string): Promise<Dog> {
        return this.http
               .post(this.dogsUrl, JSON.stringify({name: name}), {headers: this.headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.dogsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}

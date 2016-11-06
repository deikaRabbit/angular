"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var DogService = (function () {
    function DogService(http) {
        this.http = http;
        this.dogsUrl = 'app/dogs';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DogService.prototype.getDogs = function () {
        return this.http.get(this.dogsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DogService.prototype.getDogsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(resolve, 2000); }) // delay 2 seconds
            .then(function () { return _this.getDogs(); });
    };
    DogService.prototype.getDog = function (id) {
        return this.getDogs()
            .then(function (dogs) { return dogs.find(function (dog) { return dog.id === id; }); });
    };
    DogService.prototype.update = function (dog) {
        var url = this.dogsUrl + "/" + dog.id;
        return this.http.put(url, JSON.stringify(dog), { headers: this.headers }).toPromise()
            .then(function () { return dog; }).catch(this.handleError);
    };
    DogService.prototype.create = function (name) {
        return this.http
            .post(this.dogsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    DogService.prototype.delete = function (id) {
        var url = this.dogsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers }).toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    DogService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    DogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DogService);
    return DogService;
}());
exports.DogService = DogService;
//# sourceMappingURL=dog-service.js.map
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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var dog_search_service_1 = require('./dog-search.service');
var DogSearchComponent = (function () {
    function DogSearchComponent(dogSearchService, router) {
        this.dogSearchService = dogSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    DogSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    DogSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogs = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.dogSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    DogSearchComponent.prototype.gotoDetail = function (dog) {
        var link = ['/detail', dog.id];
        this.router.navigate(link);
    };
    DogSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dog-search',
            templateUrl: 'dog-search.component.html',
            styleUrls: ['dog-search.component.css'],
            providers: [dog_search_service_1.DogSearchService]
        }), 
        __metadata('design:paramtypes', [dog_search_service_1.DogSearchService, router_1.Router])
    ], DogSearchComponent);
    return DogSearchComponent;
}());
exports.DogSearchComponent = DogSearchComponent;
//# sourceMappingURL=dog-search.component.js.map
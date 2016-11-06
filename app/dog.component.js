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
var dog_service_1 = require('./dog-service');
var DogComponent = (function () {
    function DogComponent(router, dogService) {
        this.router = router;
        this.dogService = dogService;
        this.title = 'Tour of Dogs';
    }
    DogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogService.getDogs().then(function (dogs) { return _this.dogs = dogs; });
    };
    ;
    DogComponent.prototype.onSelect = function (dog) {
        this.selectDog = dog;
    };
    ;
    DogComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectDog.id]);
    };
    DogComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.dogService.create(name).then(function (dog) {
            _this.dogs.push(dog);
            _this.selectDog = null;
        });
    };
    DogComponent.prototype.delete = function (dog) {
        var _this = this;
        this.dogService.delete(dog.id).then(function () {
            _this.dogs = _this.dogs.filter(function (d) { return d !== dog; });
            if (_this.selectDog === dog) {
                _this.selectDog = null;
            }
        });
    };
    DogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dogs',
            templateUrl: 'dog.component.html',
            styleUrls: ['dog.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, dog_service_1.DogService])
    ], DogComponent);
    return DogComponent;
}());
exports.DogComponent = DogComponent;
//# sourceMappingURL=dog.component.js.map
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
var common_1 = require('@angular/common');
var dog_service_1 = require('./dog-service');
var DogDetailsComponent = (function () {
    function DogDetailsComponent(dogService, route, location) {
        this.dogService = dogService;
        this.route = route;
        this.location = location;
    }
    DogDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.dogService.getDog(id).then(function (dog) { return _this.dog = dog; });
        });
    };
    DogDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    DogDetailsComponent.prototype.save = function () {
        var _this = this;
        this.dogService.update(this.dog).then(function () { return _this.goBack(); });
    };
    DogDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dog-details',
            template: "<div *ngIf=\"dog\">\n                   <h2>{{dog.name}} details:</h2>\n                   <div><label>Id: </label>{{dog.id}}</div>\n                   <div>\n                       <label>Name: </label>\n                       <input type=\"text\" [(ngModel)]=\"dog.name\" placeholder=\"name\">\n                  </div>\n                  <button (click)=\"save()\">Save</button>\n                  <button (click)=\"goBack()\">Back</button>\n              </div>",
            styleUrls: ['dog-details.component.css'],
        }), 
        __metadata('design:paramtypes', [dog_service_1.DogService, router_1.ActivatedRoute, common_1.Location])
    ], DogDetailsComponent);
    return DogDetailsComponent;
}());
exports.DogDetailsComponent = DogDetailsComponent;
//# sourceMappingURL=dog-details.component.js.map
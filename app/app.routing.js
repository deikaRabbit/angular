"use strict";
var router_1 = require('@angular/router');
var dog_component_1 = require('./dog.component');
var dashboard_component_1 = require('./dashboard.component');
var dog_details_component_1 = require('./dog-details.component');
var appRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'dogs',
        component: dog_component_1.DogComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: dog_details_component_1.DogDetailsComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
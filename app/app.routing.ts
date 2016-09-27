import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogComponent }      from './dog.component';
import { DashboardComponent } from './dashboard.component';
import { DogDetailsComponent } from './dog-details.component'

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'dogs',
        component: DogComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: DogDetailsComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

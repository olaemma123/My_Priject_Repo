import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'profile',
        loadComponent:()=>import('./profile/profile.component').then(p => p.ProfileComponent)
    },
    {
        path:'my_order',
        loadChildren:()=>import('../management/management-routing.module').then(m => m.ManagementRoutingModule)
    }

    
];

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
    {
        path: '', loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'one', loadChildren: './layout/layout.module#LayoutModule'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }
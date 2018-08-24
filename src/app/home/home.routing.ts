import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
    {
    path: '', component: HomeComponent
}
]

@NgModule({
    imports: [
        RouterModule.forChild(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
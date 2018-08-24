import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';


const APP_ROUTES: Routes = [{
    path: '', component: LayoutComponent,
    children: [
        { path: '', loadChildren :'../container/container.module#ContainerModule'}
    ]
}]

@NgModule({
    imports: [
        RouterModule.forChild(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule { }
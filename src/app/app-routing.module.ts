import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
export const routes: Routes = [
    {
        path: '', children: [
        {path: '', redirectTo: '/home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent}
    ],

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

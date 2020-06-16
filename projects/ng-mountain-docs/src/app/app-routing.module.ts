import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from "./modules/core/components/landing/landing.component";


const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {
    path: 'documentation',
    loadChildren: () => import('./modules/documentation/documentation.module').then(m => m.DocumentationModule)
  },
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { CitiesvisitedComponent } from './citiesvisited/citiesvisited.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'cities', component: CitiesComponent},
  { path: 'footer', component : FooterComponent},
  { path: 'cities/:id', component : CitiesvisitedComponent}, 
  { path: '', redirectTo: 'cities', pathMatch: 'full'},
  { path: '**', redirectTo: 'cities', pathMatch: 'full'} // a wild card route that redirects to a configured path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

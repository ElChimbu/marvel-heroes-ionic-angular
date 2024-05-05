import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroDetailComponent } from 'src/components/superhero-detail/superhero-detail.component';
import { SuperheroDetailModule } from 'src/components/superhero-detail/superhero-detail.module';
import { SuperheroesListComponent } from 'src/components/superheroes-list/superheroes-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: SuperheroesListComponent,
  },
  {
    path: 'hero-resume/:id',
    component: SuperheroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SuperheroDetailModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

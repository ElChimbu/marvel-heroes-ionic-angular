import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuperheroDetailComponent } from './superhero-detail.component';

@NgModule({
  declarations: [SuperheroDetailComponent],
  imports: [CommonModule, RouterModule],
})
export class SuperheroDetailModule {}

import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/services/marvel.service';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: '../superheroes-list/superheroes-list.component.html',
  styleUrls: ['../superheroes-list/superheroes-list.component.scss'],
})
export class SuperheroesListComponent implements OnInit {
  superheroes: any[] = [];

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {
    this.marvelService.getHeroesList().subscribe((response) => {
      this.superheroes = response.data.results;
    });
  }
}

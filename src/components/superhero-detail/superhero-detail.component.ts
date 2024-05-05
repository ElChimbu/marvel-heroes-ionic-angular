import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from 'src/services/marvel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: '../superhero-detail/superhero-detail.component.html',
  styleUrls: ['../superhero-detail/superhero-detail.component.scss'],
})
export class SuperheroDetailComponent implements OnInit, OnDestroy {
  superhero: any;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marvelService: MarvelService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const numericId = parseInt(id, 10);

      this.subscription = this.marvelService
        .getHero(numericId)
        .subscribe(
          (response) => {
            this.superhero = response.data.results[0];
          },
          (error) => {
            console.error('Error fetching superhero:', error);
          }
        );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/list']);
  }
}

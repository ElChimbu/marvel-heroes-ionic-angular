import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SuperheroesListComponent } from 'src/components/superheroes-list/superheroes-list.component';

@NgModule({
  declarations: [AppComponent, SuperheroesListComponent],
  imports: [
    BrowserModule,
    CommonModule, // Include CommonModule here
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

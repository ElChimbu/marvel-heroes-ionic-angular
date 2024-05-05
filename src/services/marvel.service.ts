import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private baseUrl = 'https://gateway.marvel.com/v1/public';
  private apiKey = '250166887c996ca7b9c7b51686c7b47e';
  private privateKey = 'e794405f283f2d436d66d3b8127db49699938cc7';

  constructor(private http: HttpClient) {}

  getHeroesList(): Observable<any> {
    const url = `${this.baseUrl}/characters`;
    const timestamp = new Date().getTime().toString();
    const hash = Md5.hashStr(
      timestamp + this.privateKey + this.apiKey
    ).toString();

    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('ts', timestamp)
      .set('hash', hash);

    return this.http.get(url, { params });
  }

  getHero(id: number): Observable<any> {
    const url = `${this.baseUrl}/characters/${id}`;
    const timestamp = new Date().getTime().toString();
    const hash = Md5.hashStr(
      timestamp + this.privateKey + this.apiKey
    ).toString();

    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('ts', timestamp)
      .set('hash', hash);

    return this.http.get(url, { params });
  }
}

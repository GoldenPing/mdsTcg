import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHandler} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Deck } from './deck.model';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

decks: Deck[] = []
private baseUrl: string = 'http://localhost:3000/api/decks/'

constructor(private http: HttpClient){}

getItems(){
  return this.http.get<Deck[]>(this.baseUrl)
}

}

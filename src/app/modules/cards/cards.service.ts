import { Injectable } from '@angular/core';
import { Card } from './card';
import { HttpClient , HttpErrorResponse, HttpHandler} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards : Card[] = []
  constructor (private http : HttpClient){}
  private baseUrl: string = 'http://localhost:3000/api/cards/'

  getItems(){
    return this.http.get<Card[]>(this.baseUrl)
  }

  addItems(card: Card){
    return this.http.put<Card>(this.baseUrl,card)
  }

  getOneItem(id?: string){
    return this.http.get<Card>(this.baseUrl+id)
  }

  updateItem(card: Card){
    return this.http.patch<Card>(this.baseUrl, card)
  }

  deleteItem(id?:string){
    return this.http.delete<Card>(this.baseUrl+id)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

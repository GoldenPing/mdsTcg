import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { Route, Router } from '@angular/router';
import { Deck } from '../deck.model';

@Component({
  selector: 'app-decks-list',
  templateUrl: './decks-list.component.html',
  styleUrls: ['./decks-list.component.css']
})
export class DecksListComponent implements OnInit {
  deckList?: Deck[]

  constructor(private deckService: DeckService, private router: Router) {
    this.getDecks()
   }


  getDecks() {
    this.deckService.getItems().subscribe((data)=>{
      this.deckList = data
    })
  }

  ngOnInit(): void {
  }

}

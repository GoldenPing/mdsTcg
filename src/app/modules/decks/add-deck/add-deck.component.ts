import { Component, Input, OnInit } from '@angular/core';
import { CardsListComponent } from '../../cards/cards-list/cards-list.component';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent implements OnInit {
@Input() cardListComp?: CardsListComponent

  constructor(  ) {
  }

  ngOnInit(): void {

  this.cardListComp?.switchLight()
  console.log(this.cardListComp?.light);


  }

}

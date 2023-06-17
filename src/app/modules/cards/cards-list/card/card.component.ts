import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,EventEmitter } from '@angular/core';
import { Card } from '../../card';
import { CardsService } from '../../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,OnChanges {

  @Input()
  cardId?: string = ''
  name?: string = ''
  stat?: number = 0


  @Output('updateCard') updateCard: EventEmitter<string> = new EventEmitter()
  @Output('deleteCard') deleteCard: EventEmitter<string> = new EventEmitter()

  constructor(private cardsService : CardsService) {

    console.log(this.cardId);

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.cardId !== undefined){
      const card = this.cardsService.getOneItem(this.cardId).subscribe((data) =>{
        this.name = data.name;
        this.stat = data.value;
        console.log(this.cardId);

      })
    }
  }

  ngOnInit(): void {
  }


  getCard(){
  }


  update(){
    this.updateCard.emit(this.cardId);
  }
  delete(){
    this.deleteCard.emit(this.cardId);
  }
}

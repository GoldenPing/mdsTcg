import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from '../card';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  constructor(private cardService: CardsService, private router: Router) {
    this.getCards()
  }
  light:boolean = true
  cardList : Card[]= []
  ngOnInit(): void {

  }

  async getCards(){

     this.cardService.getItems().subscribe((data) =>{
      this.cardList = data
     })

  }

  getSelectedCard(idCard: string|undefined){

    if(idCard === undefined){
      return undefined;
    }
    return this.cardList.find(e => e.id === idCard)?.id
  }

  updateCard(idCard: string){
    this.router.navigate(['/cards/update',idCard])
  }

  deleteCard(idCard: string){

    this.cardService.deleteItem(idCard).subscribe(data => {
     this.cardList = this.cardList.filter(e => e.id !== idCard)
    })
  }

  switchLight(){
    this.light = !this.light
    console.log("switch", this.light);

  }
}

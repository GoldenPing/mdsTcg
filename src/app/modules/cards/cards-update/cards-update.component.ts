import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card';
import { CardsService } from '../cards.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cards-update',
  templateUrl: './cards-update.component.html',
  styleUrls: ['./cards-update.component.css']
})
export class CardsUpdateComponent implements OnInit {

  private idCard : string = ''
  hide = true;
  card? : Card;

  cardUpdateForm = new FormGroup(
    {
      name: new FormControl(this.card?.name,[Validators.required]),
      value: new FormControl(this.card?.value,[Validators.required])
    }
  )


  constructor(private activitedRoute: ActivatedRoute, private cardService: CardsService, private router : Router) {
    this.activitedRoute.params.subscribe((params)=> {
      this.idCard = params['id']
      this.cardService.getOneItem(this.idCard).subscribe(
        data => {this.card = data; this.cardUpdateForm.setValue({name: data.name, value: data.value})}
      )
    })

   }

  ngOnInit(): void {
    console.log(this.idCard);
  }

  onSubmit(): void {
    const cardUpdate:Card = {
      id: this.idCard,
      name: this.cardUpdateForm.value.name,
      value: this.cardUpdateForm.value.value
    }
    this.cardService.updateItem(cardUpdate).subscribe(data => {this.router.navigateByUrl('/cards')})

  }

}

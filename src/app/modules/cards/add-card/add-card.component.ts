import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Card } from '../card';
import { CardsService } from '../cards.service';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  card? : Card

  cardForm = new FormGroup({
    name : new FormControl(this.card?.name, [Validators.required]),
    value: new FormControl(this.card?.value, [Validators.required, Validators.min(0), Validators.pattern(/[0-9]*/gm)])
  })

  constructor( private cardService : CardsService){ }

  ngOnInit(): void {
  }

  onSubmit(){

    this.cardService.addItems(this.cardForm.value).subscribe((data) => {
      console.log(data);
    })
  }
}

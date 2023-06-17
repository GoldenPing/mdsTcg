import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckRoutingModule } from './decks-routing.module';
import { DecksListComponent } from './decks-list/decks-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AddDeckComponent } from './add-deck/add-deck.component';
import { CardsListComponent } from '../cards/cards-list/cards-list.component';
import { CardsModule } from '../cards/cards.module';



@NgModule({
  declarations: [
    DecksListComponent,
    AddDeckComponent,
  ],
  imports: [
    CommonModule,
    DeckRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardsModule
  ]
})
export class DecksModule { }

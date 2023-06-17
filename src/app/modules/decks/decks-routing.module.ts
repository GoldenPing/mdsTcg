import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksListComponent } from './decks-list/decks-list.component';
import { AddDeckComponent } from './add-deck/add-deck.component';


const routes: Routes = [
    { path: '', component: DecksListComponent},
    { path: 'add', component: AddDeckComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
  export class DeckRoutingModule { }

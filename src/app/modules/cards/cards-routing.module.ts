import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsUpdateComponent } from './cards-update/cards-update.component';


const routes: Routes = [
  {
    path: '' , component: CardsListComponent},
  {
    path: 'add', component: AddCardComponent},
  {
    path: 'update/:id' ,component: CardsUpdateComponent}

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CardRoutingModule { }

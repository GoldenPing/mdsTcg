import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: 'cards' , loadChildren:()=> import('./modules/cards/cards.module').then(m  => m.CardsModule)},
      { path: 'decks' , loadChildren:()=> import('./modules/decks/decks.module').then(m => m.DecksModule)
       }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

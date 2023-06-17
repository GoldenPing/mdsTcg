import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './cards-routing.module';

import { CardsListComponent } from './cards-list/cards-list.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardComponent } from './cards-list/card/card.component';

import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsUpdateComponent } from '../../modules/cards/cards-update/cards-update.component';




@NgModule({
  declarations: [
    CardComponent,
    CardsListComponent,
    AddCardComponent,
    CardsUpdateComponent,
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardsListComponent
  ]
})
export class CardsModule { }

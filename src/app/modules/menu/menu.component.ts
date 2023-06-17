import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  links = ['cards', 'decks', 'play'];
  url = ['cards', 'decks', 'play']
  activeLink = this.links[0];
  background: ThemePalette = 'primary';
;
  ngOnInit(): void {
  }



}

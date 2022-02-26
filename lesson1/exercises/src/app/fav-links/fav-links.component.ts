import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.magnumphotos.com/page/1/', 'https://www.rouleur.cc']
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pix Gallery';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn.shopify.com/s/files/1/0604/3445/products/D3S_5754.jpg?v=1506714015';
  image3 = 'https://cdn.shopify.com/s/files/1/0604/3445/products/D80_6104.jpg?v=1493323845';

  constructor() { }

  ngOnInit() {
  }

}
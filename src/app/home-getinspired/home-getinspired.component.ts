import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { CardNftComponent } from '../card-nft/card-nft.component';

@Component({
  selector: 'app-home-getinspired',
  templateUrl: './home-getinspired.component.html',
  styleUrls: ['./home-getinspired.component.css']
})
export class HomeGetinspiredComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}


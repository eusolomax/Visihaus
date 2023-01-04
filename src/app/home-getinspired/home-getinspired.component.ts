import { Component, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { post } from "../database/post"
import { CardNftComponent } from '../card-nft/card-nft.component';

@Component({
  selector: 'app-home-getinspired',
  templateUrl: './home-getinspired.component.html',
  styleUrls: ['./home-getinspired.component.css']
})
export class HomeGetinspiredComponent {
  data: any = post.user

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
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


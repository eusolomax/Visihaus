import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-nft',
  templateUrl: './card-nft.component.html',
  styleUrls: ['./card-nft.component.css']
})
export class CardNftComponent {
@Input() title!: string
@Input() username!: string
@Input() value!: string
@Input() imageurl!: string
}

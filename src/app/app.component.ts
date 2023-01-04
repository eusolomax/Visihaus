import { Component, Inject } from '@angular/core';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeHeadComponent } from './home-head/home-head.component';
import { HomeGetinspiredComponent } from './home-getinspired/home-getinspired.component';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(@Inject(Title) private titleService: Title ) {}

  ngOnInit() {
    let i = 0
    let array = ["Visihaus", "Visihaus +"]
    this.titleService.setTitle(array[0])

    setInterval(() => {
      this.titleService.setTitle(array[i]);

      if (i == array.length) {
        i = 0
        this.titleService.setTitle(array[i]);
      } else {
        i++
      }
      
    }, 1800)
  }
}

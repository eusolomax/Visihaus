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
  cursorOne = true
  cursorTwo = true
  oneUp = false
  clientXone: any
  clientYone: any
  clientXtwo: any
  clientYtwo: any

  public constructor(@Inject(Title) private titleService: Title ) {
    document.addEventListener("mousemove", (e) => {
      setTimeout(() => {
        this.clientXone = e.clientX - 7 + "px"
        this.clientYone = e.clientY - 6 + "px"
      }, 80)

      setTimeout(() => {
        this.clientXtwo = e.clientX - 4 + "px"
        this.clientYtwo = e.clientY - 3 + "px"
      }, 40)
    })

    document.addEventListener("mousedown", () => {
      this.oneUp = true
    })

    document.addEventListener("mouseup", () => {
      this.oneUp = false
    })
  }
  
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

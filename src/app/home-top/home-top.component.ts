import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.css']
})
export class HomeTopComponent implements AfterViewInit {
  welcomeTitle: string = ""
  number: number = 0

  ngAfterViewInit(): void {
    this.WelcomeTitleShow()
  }

  WelcomeTitleShow(){
    console.log("foi")
    let welcomeTitle = "Welcome to the Artists Shelter"
    let array = welcomeTitle.split('')
    let i = 0
    let interval2time = 600

    let interval1 = setInterval(() => {
      if (i != array.length){
        this.welcomeTitle += array[i]
        i++
      }

      if (i == array.length){
        clearInterval(interval1)
      }
    }, 56)
      
    let interval2 = setInterval(() => {
      if (i == array.length) {
        setTimeout(() => {
          this.welcomeTitle = "Welcome to the Artists Shelter"
        }, interval2time);
        this.welcomeTitle += "|"
      }
    }, interval2time * 2)
  }
}

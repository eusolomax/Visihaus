import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeHeadComponent } from './home-head/home-head.component';
import { HomeGetinspiredComponent } from './home-getinspired/home-getinspired.component';
import { CardNftComponent } from './card-nft/card-nft.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTopComponent,
    HomeHeadComponent,
    HomeGetinspiredComponent,
    CardNftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

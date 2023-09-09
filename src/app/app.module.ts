import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './Reusable Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

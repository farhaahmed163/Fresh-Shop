import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],


})
export class FooterComponent {
  slidesStore = [
    { src: "https://themewagon.github.io/freshshop/images/instagram-img-01.jpg", alt: "img1", title: "first", id: "1" },

    { src: "https://themewagon.github.io/freshshop/images/instagram-img-02.jpg", alt: "img2", title: "second", id: "2" },

    { src: "https://themewagon.github.io/freshshop/images/instagram-img-03.jpg", alt: "img3", title: "first", id: "3" },

    { src: "https://themewagon.github.io/freshshop/images/instagram-img-04.jpg", alt: "img4", title: "fourth", id: "4" },

    { src: "https://themewagon.github.io/freshshop/images/instagram-img-05.jpg", alt: "img4", title: "fourth", id: "5" },

    { src: "https://themewagon.github.io/freshshop/images/instagram-img-06.jpg", alt: "img6", title: "sixth", id: "6" },


    { src: "https://themewagon.github.io/freshshop/images/instagram-img-07.jpg", alt: "img7", title: "seventh", id: "7" },

    { src: "https://themewagon.github.io/freshshop/images/instagram-img-08.jpg", alt: "img8", title: "eighth", id: "8" },

    { src: "https://themewagon.github.io/freshshop/images/instagram-img-09.jpg", alt: "img9", title: "ninth", id: "9" },
  ]
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

}
